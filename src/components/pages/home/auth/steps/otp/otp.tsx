import { Flex } from "antd";
import { useTranslations } from "next-intl";
import OtpInput from "react-otp-input";
import { useSelector } from "react-redux";

import Button from "@/components/shared/button";
import ErrorMessage from "@/components/shared/error-message";
import { RootState } from "@/store";
import Attempts from "../../attempts/attempts";
import { TStep } from "../../auth";
import { useOtp } from "./hooks/use-otp";

import authCss from "../../auth.module.css";
import css from "./otp.module.css";

interface Props {
	setStep: React.Dispatch<React.SetStateAction<TStep>>;
	prevStep: TStep;
}

function Otp({ setStep, prevStep }: Props) {
	const t = useTranslations("auth.otp");
	const { error, loading } = useSelector((state: RootState) => state.verify);
	const { error: resetError, loading: resetLoading } = useSelector(
		(state: RootState) => state.resetVerify
	);

	const {
		otp,
		setOtp,
		handleConfirm,
		handleResend,
		resendTime,
		attemptCount,
		attemptCountWithSameOtp,
	} = useOtp(prevStep);

	const phoneNumber = useSelector((state: RootState) => state.phoneNumber);

	function formatPhoneNumber() {
		return phoneNumber.replace(
			/(\d{3})(\d{2})(\d{5})(\d{2})/,
			"$1 $2 *** ** $4"
		);
	}

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleConfirm()
			.then((res) => {
				if (res?.ok)
					setStep(
						prevStep === "signUp" ? "signUpSuccess" : "newPassword"
					);
			})
			.catch(() => {
				if (attemptCount === 0 && attemptCountWithSameOtp === 1) {
					setStep("otpError");
				}
			});
	};

	return (
		<form className={authCss.modal_form} onSubmit={onSubmit}>
			<header className={authCss.modal_header}>
				<h3 className={authCss.modal_title}>{t("title")}</h3>
				<p className={css.number}>
					{t.rich("description", {
						phone: () => <span>{formatPhoneNumber()}</span>,
					})}
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
						inputStyle={
							error || resetError
								? otpErrorInputStyle
								: otpInputStyle
						}
						renderInput={(props) => <input {...props} />}
					/>
					<ErrorMessage>{!!error && t(error)}</ErrorMessage>
					<ErrorMessage>{!!resetError && t(resetError)}</ErrorMessage>
				</div>
			</div>
			<div className={css.modal_footer}>
				<Flex justify='space-between' gap={20}>
					<Button
						type='button'
						onClick={() =>
							setStep(
								prevStep === "signUp"
									? "signUp"
									: "resetPassword"
							)
						}
						variant='secondary'
						style={{ minWidth: 138 }}
					>
						{t("back")}
					</Button>
					<Button
						full
						loading={loading || resetLoading}
						disabled={
							otp.length < 5 || attemptCountWithSameOtp === 0
						}
						variant='primary'
					>
						{t("confirm")}
					</Button>
				</Flex>
			</div>
			<Attempts
				resendTime={resendTime}
				attemptCount={attemptCount}
				onClick={handleResend}
			/>
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
