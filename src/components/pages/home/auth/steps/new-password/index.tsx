import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import Button from "@/components/shared/button";
import { TStep } from "../../auth";
import NewPasswordField from "../../new-password-field";

import ErrorMessage from "@/components/shared/error-message";
import {
	clearUpdatePasswordError,
	updatePassword,
} from "@/slices/auth/updatePassword";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import css from "../../auth.module.css";

interface Props {
	setStep: React.Dispatch<React.SetStateAction<TStep>>;
	onClose: () => void;
}

function NewPassword({ setStep, onClose }: Props) {
	const t = useTranslations("auth.new_password");
	const [isValid, setIsValid] = useState(false);
	const [password, setPassword] = useState<string>("");
	const { token } = useSelector((state: RootState) => state.resetVerify);
	const { isLoggedIn } = useSelector((state: RootState) => state.login);
	const { loading, error } = useSelector(
		(state: RootState) => state.updatePassword
	);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(clearUpdatePasswordError());
	}, [dispatch, password]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(updatePassword({ token, new_password: password }))
			.unwrap()
			.then((res) => {
				if (res?.ok) {
					isLoggedIn ? onClose() : setStep("resetSuccess");
				}
			});
	};

	return (
		<form className={css.modal_form} onSubmit={onSubmit}>
			<div className={css.modal_header}>
				<h3 className={css.modal_title}>{t("title")}</h3>
				<p className={css.modal_description}>{t("description")}</p>
			</div>
			<div className={css.modal_body}>
				<NewPasswordField
					setPassword={setPassword}
					setIsValid={setIsValid}
					isValid={isValid}
				/>
				<ErrorMessage>
					{!!error && t("something_went_wrong")}
				</ErrorMessage>
			</div>
			<div className={css.modal_footer}>
				<Button
					loading={loading}
					disabled={!isValid}
					variant='primary'
					full
				>
					{t("change_password")}
				</Button>
			</div>
		</form>
	);
}

export default NewPassword;
