import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import Button from "@/components/shared/button";

import {
	clearResetError,
	resetPassword,
	setNewOtpTime,
} from "@/slices/auth/resetPassword";
import { clearVerifyError } from "@/slices/auth/verify";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { TStep } from "../../auth";

import ErrorMessage from "@/components/shared/error-message";
import { setOtpKey } from "@/slices/otpKey/otpKey";
import css from "../../auth.module.css";
import PhoneNumberInput from "../../phone-number-input";

interface Props {
	setStep: React.Dispatch<React.SetStateAction<TStep>>;
	setPrevStep: React.Dispatch<React.SetStateAction<TStep>>;
}

function ResetPassword({ setStep, setPrevStep }: Props) {
	const t = useTranslations("auth.reset_password");
	const { user } = useSelector((state: RootState) => state.user);

	const [phoneNumber, setPhoneNumber] = useState("+998");

	const dispatch = useDispatch<AppDispatch>();
	const { loading, error } = useSelector(
		(state: RootState) => state.resetPassword
	);

	useEffect(() => {
		dispatch(clearResetError());
	}, [dispatch, phoneNumber]);

	useEffect(() => {
		if (user?.phone_number) setPhoneNumber(user.phone_number);
	}, [user?.phone_number]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(clearVerifyError());
		dispatch(resetPassword({ phone_number: phoneNumber }))
			.unwrap()
			.then((res) => {
				if (res?.ok) {
					dispatch(setOtpKey(res.result.otp_key));
					setPrevStep("resetPassword");
					setStep("otp");
				} else {
				}
			})
			.catch((res) => {
				if (res.new_otp_time) {
					dispatch(setNewOtpTime(res.new_otp_time));
					setStep("otpError");
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
				<div>
					<PhoneNumberInput
						value={phoneNumber}
						setValue={setPhoneNumber}
					/>
					<ErrorMessage>{!!error && t(error)}</ErrorMessage>
				</div>
			</div>
			<div className={css.modal_footer}>
				<Button
					disabled={
						phoneNumber?.length !== 13 ||
						!phoneNumber.startsWith("+998")
					}
					full
					loading={loading}
				>
					{t("get_code")}
				</Button>
			</div>
		</form>
	);
}

export default ResetPassword;
