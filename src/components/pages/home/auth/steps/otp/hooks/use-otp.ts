import { clearResetVerifyError, resetVerify } from "@/slices/auth/resetVerify";
import {
	IOtpKeyRequest,
	IOtpKeyRequestResend,
	clearVerifyError,
	resendOtpKey,
	verify,
} from "@/slices/auth/verify";
import { setOtpKey } from "@/slices/otpKey/otpKey";
import { AppDispatch, RootState } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TStep } from "../../../auth";

const RESENT_TIME = 59;

export const useOtp = (prevStep: TStep) => {
	const [otp, setOtp] = useState<string>("");
	const [resendTime, setResendTime] = useState<number>(RESENT_TIME);
	const otpKey = useSelector((state: RootState) => state.otpKey);
	const [isTimerStarted, setIsTimerStarted] = useState<boolean>(true);
	const dispatch = useDispatch<AppDispatch>();
	const [attemptCountWithSameOtp, setAttemptCountWithSameOtp] =
		useState<number>(2);
	const [attemptCount, setAttemptCount] = useState<number>(2);

	useEffect(() => {
		dispatch(clearVerifyError());
		dispatch(clearResetVerifyError());
	}, [dispatch]);

	useEffect(() => {
		setIsTimerStarted(true);
		setResendTime(RESENT_TIME);
	}, [dispatch]);

	useEffect(() => {
		let intervalId: NodeJS.Timeout;
		if (isTimerStarted) {
			intervalId = setInterval(() => {
				if (resendTime > 0) {
					setResendTime((prevSeconds: number) => prevSeconds - 1);
				} else {
					if (attemptCount > 0) {
						setIsTimerStarted(false);
					}
					clearInterval(intervalId);
				}
			}, 1000);
		}

		return () => clearInterval(intervalId);
	}, [resendTime, isTimerStarted, attemptCount]);

	const handleConfirm = async () => {
		if (!otpKey) return;
		dispatch(clearVerifyError());
		dispatch(clearResetVerifyError());
		setAttemptCountWithSameOtp((prev) => prev - 1);
		const payload: IOtpKeyRequest = {
			otp_key: otpKey,
			otp_code: otp,
		};

		if (prevStep === "signUp") {
			return dispatch(verify(payload)).unwrap();
		}
		return dispatch(resetVerify(payload)).unwrap();
	};

	const handleResend = () => {
		if (attemptCount === 0) {
			return;
		}
		setIsTimerStarted(true);
		setResendTime(RESENT_TIME);
		setOtp("");
		dispatch(clearVerifyError());
		dispatch(clearResetVerifyError());
		if (!otpKey) return;
		const payload: IOtpKeyRequestResend = {
			otp_key: otpKey,
		};

		dispatch(resendOtpKey(payload))
			.unwrap()
			.then((res) => {
				if (res.ok) {
					dispatch(setOtpKey(res.result.otp_key));
				}
			})
			.finally(() => {
				setAttemptCount((prevState) => prevState - 1);
				setAttemptCountWithSameOtp(2);
			});
	};

	return {
		otp,
		setOtp,
		handleConfirm,
		handleResend,
		attemptCountWithSameOtp,
		resendTime,
		attemptCount,
	};
};
