import StoreSVG from "@/components/pages/cart/delivery/content/obtaining/component/icon/storeSVG";
import TruckSVG from "@/components/pages/cart/delivery/content/obtaining/component/icon/truckSVG";
import { raleway } from "@/constants/fonts/fonts";
import { useTranslations } from "next-intl";
import { AddressBookTab } from "../../wrapper";
import css from "./index.module.css";

interface props {
	tab: AddressBookTab;
	changeTab: (e: AddressBookTab) => void;
}

const ObtainingChose = ({ tab, changeTab }: props) => {
	const t = useTranslations("address_book");

	return (
		<div className={css.obtaining_btn}>
			<div
				className={`${css.label} ${
					tab === "pickup" ? css.label_right : css.label_left
				}`}
			></div>
			<div className={css.choose_btn}>
				<div onClick={(state) => changeTab("delivery")}>
					<TruckSVG
						color={`${tab == "delivery" ? "#39B969" : "#A4A4A4"}`}
					/>{" "}
					<span
						className={`${css.btn_text} ${raleway.className} ${
							tab == "delivery" ? css.active : ""
						}`}
					>
						{t("delivery")}
					</span>
				</div>
				<div onClick={(state) => changeTab("pickup")}>
					<StoreSVG
						color={`${tab == "pickup" ? "#39B969" : "#A4A4A4"}`}
					/>{" "}
					<span
						className={`${css.btn_text} ${raleway.className} ${
							tab == "pickup" ? css.active : ""
						}`}
					>
						{t("pickup")}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ObtainingChose;
