import Attempts from "@/components/pages/home/auth/otp/attempts/attempts";
import FormError from "@/components/shared/form-error/form-error";
import { resendOtpKey, verify } from "@/slices/auth/verify";
import { clearMessage } from "@/slices/message/message";
import { setOtpKey } from "@/slices/otpKey/otpKey";
import { AppDispatch, RootState } from "@/store";
import { Flex } from "antd";
import { useTranslations } from "next-intl";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import css from "../reset-password.module.css";

interface Props {
	onPrev: () => void;
	onNext: () => void;
}

interface IState {
	message: string;
	otpKey: string;
}

function EnterCode({ onPrev, onNext }: Props) {
	const t = useTranslations();
	const [otp, setOtp] = useState<string>("");
	const [resendTime, setResendTime] = useState<number>(59);
	const message = useSelector((state: RootState) => state.message);
	const otpKey = useSelector((state: RootState) => state.otpKey);
	const [timerStarted, setTimerStarted] = useState<boolean>(true);
	const dispatch = useDispatch<AppDispatch>();
	const [attemptCount, setAttemptCount] = useState<number>(2);

	const handleConfirm = () => {
		const payload = {
			otp_key: otpKey as string,
			otp_code: otp,
		};

		dispatch(verify(payload))
			.unwrap()
			.then((res) => {})
			.catch(() => {})
			.finally(() => {});
	};

	const handleResend = () => {
		if (attemptCount === 0) {
			return;
		}
		setTimerStarted(true);
		setResendTime(59);
		setOtp("");
		dispatch(clearMessage());

		const payload = {
			otp_key: otpKey as string,
			otp_code: otp,
		};

		dispatch(resendOtpKey(payload))
			.unwrap()
			.then((res) => {
				setAttemptCount((prevState) => prevState - 1);
				dispatch(setOtpKey(res.result.otp_key));
			})
			.catch(() => {})
			.finally(() => {});
	};

	return (
		<>
			<div className={css.modal_header}>
				<h3 className={css.modal_title}>
					{t("profile.enter_code.modal_title")}
				</h3>
				<p className={css.modal_description}>
					{t("profile.enter_code.modal_description")}
				</p>
			</div>
			<div className={css.modal_body}>
				<OtpInput
					value={otp}
					onChange={(value) => {
						setOtp(value);
						dispatch(clearMessage());
					}}
					numInputs={5}
					containerStyle={otpContainerStyle}
					inputType={"number"}
					placeholder={"00000"}
					inputStyle={
						message !== "" ? otpErrorInputStyle : otpInputStyle
					}
					renderInput={(props) => <input {...props} />}
				/>
				<FormError
					style={{
						textAlign: "left",
						fontSize: "14px",
						lineHeight: "18px",
						height: "18px",
					}}
					error={message !== "" ? "Недействительный код" : ""}
				/>
			</div>
			<div className={css.modal_footer}>
				<Flex
					justify='space-between'
					gap={20}
				>
					<button
						onClick={onPrev}
						className={[css.btn, css.btn_outline].join(" ")}
					>
						{t("profile.enter_code.back")}
					</button>
					<button
						onClick={onNext}
						disabled={otp.length < 5}
						className={[css.btn, css.btn_primary].join(" ")}
					>
						{t("profile.enter_code.confirm")}
					</button>
				</Flex>
				{resendTime === 0 ? (
					<Attempts
						attemptCount={attemptCount}
						onClick={handleResend}
					/>
				) : (
					<p className={css.timer}>
						Новый код через 00:
						{resendTime < 10 ? `0${resendTime}` : resendTime}
					</p>
				)}
			</div>
		</>
	);
}

const otpContainerStyle = {
	display: "flex",
	justifyContent: "space-between",
};

const otpInputStyle = {
	padding: "16px 20px",
	border: "1.6px solid #E9E9E9",
	borderRadius: "12px",
	width: "56px",
	height: "60px",
	fontSize: "24px",
	color: "#232323",
};

const otpErrorInputStyle = {
	padding: "16px 20px",
	border: "1.6px solid #FF6C6C",
	borderRadius: "12px",
	width: "56px",
	height: "60px",
	fontSize: "24px",
	color: "#232323",
};

export default EnterCode;
