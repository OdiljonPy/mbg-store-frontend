import { setPhoneNumber } from "@/slices/phone_numer/phoneNumber";
import { AppDispatch, RootState } from "@/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PasswordInput from "./password-input/password-input";
import PhoneNumberInput from "./phone-input/phone-input";

import FormError from "@/components/shared/form-error/form-error";
import { signUpUser } from "@/slices/auth/signup";
import { setOtpKey } from "@/slices/otpKey/otpKey";
import authCss from "../auth.module.css";
import Offer from "./offer/offer";
import css from "./signup.module.css";

interface Props {
	setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SignUp = ({ setStep }: Props) => {
	const phoneNumber = useSelector((state: RootState) => state.phoneNumber);
	const [password, setPassword] = useState<string>("");
	const [offer, setOffer] = useState(false);
	const dispatch = useDispatch<AppDispatch>();
	const { error, loading } = useSelector((state: RootState) => state.signup);
	const [isValid, setIsValid] = useState(false);

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
					setStep((prev) => prev + 1);
				}
			})
			.catch(() => {});
	};

	return (
		<form
			onSubmit={onSubmit}
			className={authCss.modal_form}
		>
			<header className={authCss.modal_header}>
				<h3 className={authCss.modal_title}>Создание аккаунта</h3>
			</header>
			<div className={authCss.modal_body}>
				<PhoneNumberInput setValue={setPhoneNumber} />
				<PasswordInput
					setPassword={setPassword}
					isValid={isValid}
					setIsValid={setIsValid}
				/>
				<Offer
					offer={offer}
					setOffer={setOffer}
				/>
				<FormError error={error ? error : ""} />
			</div>
			<div className={authCss.modal_footer}>
				<button
					disabled={
						!isValid || loading || !offer || phoneNumber.length < 13
					}
					className={`${authCss.btn} ${authCss.btn_primary}`}
					type={"submit"}
				>
					{loading ? (
						<svg
							className={authCss.spin}
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M21 12a9 9 0 1 1-6.219-8.56' />
						</svg>
					) : (
						<span>Создать аккаунт</span>
					)}
				</button>
				<p className={css.signup}>
					Есть аккаунт?{" "}
					<a onClick={() => setStep(2)}>Войти в аккаунт</a>
				</p>
			</div>
		</form>
	);
};

export default SignUp;
