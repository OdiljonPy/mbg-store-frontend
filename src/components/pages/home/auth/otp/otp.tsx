import { RootState } from "@/store";
import { Flex } from "antd";
import OtpInput from "react-otp-input";
import { useSelector } from "react-redux";
import { useOtp } from "./hooks/use-otp";

import authCss from "../auth.module.css";
import css from "./otp.module.css";
import Attempts from "./attempts/attempts";
interface Props {
	setStep: React.Dispatch<React.SetStateAction<number>>;
}

function Otp({ setStep }: Props) {
	const {
		otp,
		setOtp,
		handleConfirm,
		handleResend,
		error,
		loading,
		resendTime,
		attemptCount,
	} = useOtp(setStep);

	const phoneNumber = useSelector((state: RootState) => state.phoneNumber);

	function formatPhoneNumber() {
		return phoneNumber.replace(
			/(\d{3})(\d{2})(\d{5})(\d{2})/,
			"$1 $2 *** ** $4"
		);
	}

	return (
		<form
			className={authCss.modal_form}
			onSubmit={handleConfirm}
		>
			<header className={authCss.modal_header}>
				<h3 className={authCss.modal_title}>Введите код</h3>
				<p className={css.number}>
					Код отправлен на номер <span>{formatPhoneNumber()}</span>
				</p>
			</header>
			<div className={authCss.modal_body}>
				<div>
					<OtpInput
						value={otp}
						onChange={(value) => setOtp(value)}
						numInputs={5}
						containerStyle={otpContainerStyle}
						inputType={"number"}
						placeholder={"00000"}
						inputStyle={error ? otpErrorInputStyle : otpInputStyle}
						renderInput={(props) => <input {...props} />}
					/>
					{error && <p className={css.error}>{error}</p>}
				</div>
			</div>
			<div className={css.modal_footer}>
				<Flex
					justify='space-between'
					gap={20}
				>
					<button
						type='button'
						onClick={() => setStep((prev) => prev - 1)}
						className={[authCss.btn, authCss.btn_outline].join(" ")}
					>
						Назад
					</button>
					<button
						disabled={otp.length !== 5 || attemptCount === 0}
						className={[authCss.btn, authCss.btn_primary].join(" ")}
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
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path d='M21 12a9 9 0 1 1-6.219-8.56' />
							</svg>
						) : (
							<span>Подтвердить</span>
						)}
					</button>
				</Flex>
			</div>
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
		</form>
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

export default Otp;
