import MobileApp from "@/components/pages/home/hero/components/hero-swiper/hero-swiper-item/info/mobile-app/mobile-app";
import { RootState } from "@/store";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import css from "./mobile-app-qr.module.css";

const MobileAppQr = () => {
	const { data, loading } = useSelector((state: RootState) => state.about);

	const t = useTranslations();
	return (
		<div className={css.qr}>
			<div className={css.icon}>
				{loading ? (
					<Skeleton width={"100%"} baseColor="white" height={"100%"} />
				) : (
					<div className={css.qr_code}>
						<Image
                            className={css.image}
							src={data.app_qr_image}
							width={250}
							height={250}
							alt='App QR'
						/>
					</div>
				)}
			</div>
			<p className={css.text}>{t("footer.qr")}</p>
			<h4 className={css.title}>{t("footer.mgbStore")}</h4>
			<div className={css.app}>
				<MobileApp />
			</div>
		</div>
	);
};

export default MobileAppQr;
