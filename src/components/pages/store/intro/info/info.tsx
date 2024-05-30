import { Rate } from "@/components/pages/product/wrapper/components/info/description/rate/rate";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { IStores } from "@/data-types/stores/stores";
import { formatDate } from "@/utils/format-date/format-date";
import { priceFormatter } from "@/utils/price-formatter/price-formatter";
import { useTranslations } from "next-intl";
import Skeleton from "react-loading-skeleton";
import css from "./info.module.css";

interface props {
	store: IStores;
	loading: boolean;
}

const Info = ({ store, loading }: props) => {
	const t = useTranslations();
	return (
		<div className={css.info}>
			{loading ? (
				<Skeleton
					count={1}
					width={100}
					height={100}
					borderRadius={"50%"}
				/>
			) : (
				<div className={css.logo}>
					<ResponsiveImage
						priority
						src={store?.logo || "/images/store/alt-logo.png"}
						height={60}
						width={60}
						alt={store?.logo}
					/>
				</div>
			)}
			<div className={css.description}>
				{loading ? (
					<Skeleton count={1} height={22} width={"50%"} />
				) : (
					<h2 className={css.title}>{store?.brand_name}</h2>
				)}
				<div className={css.text}>
					{loading ? (
						<Skeleton count={1} height={18} width={250} />
					) : (
						<>
							<p className={css.orders}>
								{priceFormatter(store?.customers_count)}{" "}
								{t("product.orders").toLowerCase()}
							</p>
							<div className={css.rate}>
								<Rate
									rate={store?.rating}
									count={store?.rating_count}
									noMargin
								/>
							</div>
						</>
					)}
				</div>
				<p className={css.from}>
					{loading ? (
						<Skeleton count={1} height={18} width={"100%"} />
					) : (
						<>
							{t("stories.with_us")}&nbsp;
							{formatDate(
								store?.created_at ? store?.created_at : ""
							)}
						</>
					)}
					{/*{dayjs(store?.created_at).format("D MMMM YYYY г.")}*/}
				</p>
			</div>
		</div>
	);
};

export default Info;
