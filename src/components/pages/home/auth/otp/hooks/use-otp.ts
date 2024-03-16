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

export const useOtp = (
	setStep: React.Dispatch<React.SetStateAction<number>>
) => {
	const [otp, setOtp] = useState<string>("");
	const [resendTime, setResendTime] = useState<number>(59);
	const otpKey = useSelector((state: RootState) => state.otpKey);
	const { error, loading } = useSelector((state: RootState) => state.verify);
	const [isTimerStarted, setIsTimerStarted] = useState<boolean>(true);
	const dispatch = useDispatch<AppDispatch>();
	const [attemptCount, setAttemptCount] = useState<number>(2);

	useEffect(() => {
		setIsTimerStarted(true);
		setResendTime(59);
	}, []);

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

	const handleConfirm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!otpKey) return;
		const payload: IOtpKeyRequest = {
			otp_key: otpKey,
			otp_code: otp,
		};

		return dispatch(verify(payload))
			.unwrap()
			.then((res) => {
				if (res.ok) {
					setStep((prev) => prev + 1);
				}
			});
	};

	const handleResend = () => {
		if (attemptCount === 0) {
			return;
		}
		setIsTimerStarted(true);
		setResendTime(59);
		setOtp("");
		dispatch(clearVerifyError());

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
			.catch((res) => {
				console.log(res);
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
		error,
		loading,
		resendTime,
		attemptCount,
	};
};
