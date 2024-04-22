import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormError from "@/components/shared/form-error/form-error";
import { clearSignUpError, signUpUser } from "@/slices/auth/signup";
import { setOtpKey } from "@/slices/otpKey/otpKey";
import { setPhoneNumber } from "@/slices/phone_numer/phoneNumber";
import { AppDispatch, RootState } from "@/store";
import { TStep } from "../../auth";
import Offer from "./offer/offer";

import Button from "@/components/shared/button";
import NewPasswordField from "../../new-password-field";

import { useTranslations } from "next-intl";
import authCss from "../../auth.module.css";
import PhoneNumberInput from "../../phone-number-input";
import css from "./signup.module.css";

interface Props {
	setStep: React.Dispatch<React.SetStateAction<TStep>>;
	setPrevStep: React.Dispatch<React.SetStateAction<TStep>>;
}

const SignUp = ({ setStep, setPrevStep }: Props) => {
	const t = useTranslations("auth.signUp");
	const phoneNumber = useSelector((state: RootState) => state.phoneNumber);
	const [password, setPassword] = useState<string>("");
	const [offer, setOffer] = useState(false);
	const dispatch = useDispatch<AppDispatch>();
	const { error, loading } = useSelector((state: RootState) => state.signup);
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		dispatch(clearSignUpError());
	}, [phoneNumber, dispatch]);

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const payload = {
			phone_number: phoneNumber,
			password: password,
		};

		dispatch(signUpUser(payload))
			.unwrap()
			.then((res) => {
				if (res.ok) {
					dispatch(setOtpKey(res.result.otp_key));
					setPrevStep("signUp");
					setStep("otp");
				}
			});
	};

	return (
		<form onSubmit={onSubmit} className={authCss.modal_form}>
			<header className={authCss.modal_header}>
				<h3 className={authCss.modal_title}>{t("title")}</h3>
			</header>
			<div className={authCss.modal_body}>
				<PhoneNumberInput setValue={setPhoneNumber} />
				<NewPasswordField
					setPassword={setPassword}
					isValid={isValid}
					setIsValid={setIsValid}
				/>
				<Offer offer={offer} setOffer={setOffer} />
				<FormError error={error ? t(error) : ""} />
			</div>
			<div className={authCss.modal_footer}>
				<Button
					loading={loading}
					disabled={!isValid || !offer || phoneNumber.length < 13}
					className={`${authCss.btn} ${authCss.btn_primary}`}
					type={"submit"}
				>
					{t("create_account")}
				</Button>
				<p className={css.signup}>
					{t("have_account")}{" "}
					<span onClick={() => setStep("login")}>{t("login")}</span>
				</p>
			</div>
		</form>
	);
};

export default SignUp;
