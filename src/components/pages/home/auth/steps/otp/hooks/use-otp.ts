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

export const useOtp = (prevStep: TStep) => {
	const [otp, setOtp] = useState<string>("");
	const [resendTime, setResendTime] = useState<number>(59);
	const otpKey = useSelector((state: RootState) => state.otpKey);
	const [isTimerStarted, setIsTimerStarted] = useState<boolean>(true);
	const dispatch = useDispatch<AppDispatch>();
	const [attemptCount, setAttemptCount] = useState<number>(2);

	useEffect(() => {
		dispatch(clearVerifyError());
		dispatch(clearResetVerifyError());
	}, [dispatch]);

	useEffect(() => {
		setIsTimerStarted(true);
		setResendTime(59);
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
		setResendTime(59);
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
			});
	};

	return {
		otp,
		setOtp,
		handleConfirm,
		handleResend,
		resendTime,
		attemptCount,
	};
};
