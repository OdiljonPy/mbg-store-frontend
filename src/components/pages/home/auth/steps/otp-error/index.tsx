import { useTranslations } from "next-intl";
import Image from "next/image";

import Button from "@/components/shared/button";
import { TStep } from "../../auth";

import css from "./index.module.css";

interface Props {
	onClose: () => void;
}

function OtpError({ onClose }: Props) {
	const t = useTranslations("auth.otp_error");

	return (
		<div className={css.wrapper}>
			<div>
				<h3 className={css.title}>{t("title")}</h3>
				<p className={css.desc}>{t("description")}</p>
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
