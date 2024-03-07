import React, {useEffect} from 'react';
import css from "@/components/pages/home/otp/otp.module.css";

interface Props {
    readonly resendTime: number,
    readonly onStart: boolean,
    setResendTime: (value: (prevSeconds: number) => number) => void
}

function Timer({resendTime, onStart, setResendTime}: Props) {
    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (onStart) {
            intervalId = setInterval(() => {
                if (resendTime > 0) {
                    setResendTime((prevSeconds: number) => prevSeconds - 1);
                } else {
                    clearInterval(intervalId);
                }
            }, 1000);
        }

        return () => clearInterval(intervalId);

    }, [resendTime, onStart]);
    return (
        <p className={css.timer}>Новый код через 00:{resendTime < 10 ? `0${resendTime}` : resendTime}</p>
    );
}

export default Timer;