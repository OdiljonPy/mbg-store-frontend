import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormError from "@/components/shared/form-error/form-error";
import { clearLoginError, loginUser } from "@/slices/auth/login";
import { AppDispatch, RootState } from "@/store";
import { TStep } from "../../auth";
import PhoneNumberInput from "../../phone-number-input";
import PasswordInput from "./password-input/password-input";

import Button from "@/components/shared/button";
import { fetchUser } from "@/slices/auth/user";
import {
	fetchFavourites,
	postFavourites,
} from "@/slices/favorites/favoritesSlice";
import { useTranslations } from "next-intl";
import authCss from "../../auth.module.css";
import css from "./login.module.css";

interface Props {
	setStep: React.Dispatch<React.SetStateAction<TStep>>;
	onClose: () => void;
}

const Login = ({ setStep, onClose }: Props) => {
	const t = useTranslations("auth.login");
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const { error, loading } = useSelector((state: RootState) => state.login);
	const { newFavourites } = useSelector(
		(state: RootState) => state.favorites
	);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(clearLoginError());
	}, [phoneNumber, dispatch]);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const payload = {
			phone_number: phoneNumber,
			password: password,
		};

		dispatch(loginUser(payload))
			.unwrap()
			.then((res) => {
				if (res?.ok) {
					onClose();
					// 	fetch favourite product from server
					dispatch(fetchFavourites()).then(() => {
						// 	send server favourite products
						const ids = newFavourites?.map((product) => product.id);
						if (ids?.length) dispatch(postFavourites(ids));
					});
				}
			})
			.then(() => {
				dispatch(fetchUser());
			});
	};

	return (
		<form onSubmit={onSubmit} className={authCss.modal_form}>
			<header className={authCss.modal_header}>
				<h3 className={authCss.modal_title}>{t("title")}</h3>
			</header>
			<div className={authCss.modal_body}>
				<PhoneNumberInput
					value={phoneNumber}
					setValue={setPhoneNumber}
				/>
				<PasswordInput setStep={setStep} setPassword={setPassword} />
				<FormError error={error ? t(error) : ""} />
			</div>
			<div className={authCss.modal_footer}>
				<Button
					loading={loading}
					disabled={
						password.length < 8 ||
						phoneNumber.length !== 13 ||
						!phoneNumber.startsWith("+998")
					}
					className={`${authCss.btn} ${authCss.btn_primary}`}
					type={"submit"}
				>
					<span>{t("enter")}</span>
				</Button>
				<p className={css.signup}>
					{t("no_account")}{" "}
					<span onClick={() => setStep("signUp")}>
						{t("create_account")}
					</span>
				</p>
			</div>
		</form>
	);
};

export default Login;
