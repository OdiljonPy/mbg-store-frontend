import { useTranslations } from "next-intl";
import Image from "next/image";

import Button from "@/components/shared/button";
import { TStep } from "../../auth";

import css from "./index.module.css";

interface Props {
	setStep: React.Dispatch<React.SetStateAction<TStep>>;
}

function ResetSuccess({ setStep }: Props) {
	const t = useTranslations("auth.reset_success");

	return (
		<div className={css.wrapper}>
			<div>
				<h3 className={css.title}>{t("title")}</h3>
				<p className={css.desc}>{t("description")}</p>
				<div className={css.image}>
					<Image
						src='/images/auth/success.png'
						alt={"success"}
						width={200}
						height={200}
					/>
				</div>
			</div>
			<Button onClick={() => setStep("login")}>{t("login")}</Button>
		</div>
	);
}

export default ResetSuccess;
