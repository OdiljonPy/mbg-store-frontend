import pickup from "@/../public/images/icons/pickup.svg";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { useTranslations } from "next-intl";
import css from "./index.module.css";

interface props {
	isWhite?: boolean;
}

export const Pickup = ({ isWhite }: props & { isWhite?: boolean }) => {
	const t = useTranslations();
	return (
		<div className={`${css.delivery} ${isWhite ? css.white : ""}`}>
			<div className={css.img}>
				<ResponsiveImage
					src={pickup}
					alt={""}
				/>
			</div>
			<h4 className={css.title}>{t("filters.delivery.self")}</h4>
			<p className={css.text}>{t("stories.pay_on")}</p>
		</div>
	);
};
