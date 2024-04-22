import { Icons } from "@/components/shared/icons";
import Label from "@/components/shared/label";
import { clearLoginError } from "@/slices/auth/login";
import { AppDispatch } from "@/store";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TStep } from "../../../auth";
import css from "./password-input.module.css";

interface Props {
	setPassword: React.Dispatch<React.SetStateAction<string>>;
	setStep: React.Dispatch<React.SetStateAction<TStep>>;
}

function PasswordInput({ setPassword, setStep }: Props) {
	const t = useTranslations("auth.login");

	const [showPassword, setShowPassword] = useState(false);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<div className={css.input_wrapper}>
			<div className={css.formInputTop}>
				<Label className={css.label} htmlFor={"signup-password"}>
					{t("password")}
				</Label>
				<p
					onClick={() => setStep("resetPassword")}
					className={css.link}
				>
					{t("forgot_password")}
				</p>
			</div>
			<div className={css.formPassword}>
				<input
					className={css.input}
					onChange={(e) => {
						setPassword(e.target.value);
						dispatch(clearLoginError());
					}}
					autoComplete='current-password'
					id={"signup-password"}
					type={showPassword ? "text" : "password"}
					placeholder={t("enter_password")}
				/>
				{showPassword ? (
					<Icons.eye
						onClick={() => setShowPassword(false)}
						className={css.endIcon}
					/>
				) : (
					<Icons.eyeOff
						onClick={() => setShowPassword(true)}
						className={css.endIcon}
					/>
				)}
			</div>
		</div>
	);
}

export default PasswordInput;
