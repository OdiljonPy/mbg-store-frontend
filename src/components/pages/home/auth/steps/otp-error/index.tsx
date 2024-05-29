import { useTranslations } from "next-intl";
import Image from "next/image";

import Button from "@/components/shared/button";

import { RootState } from "@/store";
import { useSelector } from "react-redux";
import css from "./index.module.css";

interface Props {
	onClose: () => void;
}

function OtpError({ onClose }: Props) {
	const t = useTranslations("auth.otp_error");
	const { new_otp_time } = useSelector(
		(state: RootState) => state.resetPassword
	);

	const getLeftHour = () => {
		if (!new_otp_time) return;
		const currentTime = new Date();
		const targetTime = new Date(new_otp_time);
		const timeDifference = targetTime.getTime() - currentTime.getTime();
		const hoursLeft = Math.ceil(timeDifference / (1000 * 60 * 60));

		return hoursLeft;
	};

	return (
		<div className={css.wrapper}>
			<div>
				<h3 className={css.title}>{t("title")}</h3>
				<p className={css.desc}>
					{t("description", { hour: getLeftHour() })}
				</p>
				<div className={css.image}>
					<Image
						src='/images/auth/error.png'
						alt={"success"}
						width={200}
						height={200}
					/>
				</div>
			</div>
			<Button onClick={onClose}>{t("close")}</Button>
		</div>
	);
}

export default OtpError;
