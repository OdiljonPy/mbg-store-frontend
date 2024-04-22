import { AppDispatch, RootState } from "@/store";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Icons } from "@/components/shared/icons";
import { useModal } from "@/hooks/use-modal";
import { clearLoginError, closeLoginModal } from "@/slices/auth/login";
import { clearSignUpError } from "@/slices/auth/signup";
import { clearVerifyError } from "@/slices/auth/verify";
import Login from "./steps/login/login";
import NewPassword from "./steps/new-password";
import Otp from "./steps/otp/otp";
import ResetPassword from "./steps/reset-password";
import SignUp from "./steps/signup/signup";

import css from "./auth.module.css";
import OtpError from "./steps/otp-error";
import ResetSuccess from "./steps/reset-success";
import SignUpSuccess from "./steps/signup-success";

export type TStep =
	| "signUp"
	| "signUpSuccess"
	| "otp"
	| "otpError"
	| "login"
	| "resetPassword"
	| "newPassword"
	| "resetSuccess"
	| "resetPasswordComplete";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	defaultStep?: "signUp" | "login" | "resetPassword";
}

function Auth({ children, className, defaultStep = "login", ...props }: Props) {
	const { onOpenLogin } = useSelector((state: RootState) => state.login);
	const { onClose, onOpen, open } = useModal();
	const [step, setStep] = useState<TStep>(defaultStep);
	const dispatch = useDispatch<AppDispatch>();
	const [prevStep, setPrevStep] = useState<TStep>(defaultStep);

	useEffect(() => {
		setStep(defaultStep);
		dispatch(clearSignUpError());
		dispatch(clearLoginError());
		dispatch(clearVerifyError());
	}, [defaultStep, dispatch, open]);

	const steps: Record<TStep, JSX.Element> = {
		signUp: <SignUp setStep={setStep} setPrevStep={setPrevStep} />,
		signUpSuccess: <SignUpSuccess setStep={setStep} />,
		otp: <Otp setStep={setStep} prevStep={prevStep} />,
		otpError: <OtpError onClose={onClose} />,
		login: <Login setStep={setStep} onClose={onClose} />,
		resetPassword: (
			<ResetPassword setPrevStep={setPrevStep} setStep={setStep} />
		),
		newPassword: <NewPassword setStep={setStep} onClose={onClose} />,
		resetSuccess: <ResetSuccess setStep={setStep} />,
		resetPasswordComplete: <></>,
	};

	const onCloseModal = () => {
		onClose();
		dispatch(closeLoginModal());
	};

	useEffect(() => {
		if (onOpenLogin) {
			onOpen();
		} else onClose();
	}, [onOpenLogin]);

	return (
		<>
			<div
				{...props}
				className={[css.modal_trigger, className].join(" ")}
				onClick={onOpen}
			>
				{children}
			</div>
			<Modal
				destroyOnClose={true}
				open={open}
				onCancel={onCloseModal}
				closeIcon={false}
				footer={null}
				width={400}
				centered
				style={{ borderRadius: "26px", overflow: "auto" }}
			>
				<div className={css.modal}>
					{steps[step]}
					<button className={css.modal_close} onClick={onCloseModal}>
						<Icons.closeModal />
					</button>
				</div>
			</Modal>
		</>
	);
}

export default Auth;
