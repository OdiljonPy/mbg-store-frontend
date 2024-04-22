import { Icons } from "@/components/shared/icons";
import { memo } from "react";
import { useTranslations } from "use-intl";
import css from "./attempts.module.css";
interface Props {
	attemptCount: number;
	onClick: () => void;
	resendTime: number;
}

const Attempts = memo(function Attempts({
	attemptCount,
	onClick,
	resendTime,
}: Props) {
	const t = useTranslations("auth.otp");

	if (resendTime === 0) {
		return (
			<button onClick={onClick} className={css.attempts}>
				<Icons.repeat />
				<span>{t("send_new_code", { count: attemptCount })}</span>
			</button>
		);
	} else {
		return (
			<p className={css.timer}>
				{t("new_code_after")}:{" "}
				{resendTime < 10 ? `0${resendTime}` : resendTime}
			</p>
		);
	}
});

export default Attempts;
