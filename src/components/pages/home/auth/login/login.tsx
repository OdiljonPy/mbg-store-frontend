import FormError from "@/components/shared/form-error/form-error";
import { loginUser } from "@/slices/auth/login";
import { AppDispatch, RootState } from "@/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authCss from "../auth.module.css";
import css from "./login.module.css";
import PasswordInput from "./password-input/password-input";
import PhoneNumberInput from "./phone-number-input/phone-number-input";
interface Props {
	setStep: React.Dispatch<React.SetStateAction<number>>;
	onClose: () => void;
}

const Login = ({ setStep, onClose }: Props) => {
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const { error, loading } = useSelector((state: RootState) => state.login);

	const dispatch = useDispatch<AppDispatch>();
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const payload = {
			phone_number: phoneNumber,
			password: password,
		};

		dispatch(loginUser(payload))
			.unwrap()
			.then((res) => {
				console.log(res.error);

				if (res?.ok) {
					onClose();
				}
			});
	};

	return (
		<form
			onSubmit={onSubmit}
			className={authCss.modal_form}
		>
			<header className={authCss.modal_header}>
				<h3 className={authCss.modal_title}>Вход в аккаунт</h3>
			</header>
			<div className={authCss.modal_body}>
				<PhoneNumberInput setValue={setPhoneNumber} />
				<PasswordInput setPassword={setPassword} />
				<FormError error={error ? error : ""} />
			</div>
			<div className={authCss.modal_footer}>
				<button
					disabled={
						password.length < 8 ||
						phoneNumber.length < 12 ||
						loading
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
						<span>Войти</span>
					)}
				</button>
				<p className={css.signup}>
					Нет аккаунта?{" "}
					<a onClick={() => setStep(0)}>Создать аккаунт</a>
				</p>
			</div>
		</form>
	);
};

export default Login;
