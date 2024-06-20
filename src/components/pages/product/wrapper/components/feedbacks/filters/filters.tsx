import { useRatingMock } from "@/components/pages/product/wrapper/components/feedbacks/filters/hooks/mock";
import Rating from "@/components/pages/product/wrapper/components/feedbacks/filters/rating/rating";
import SendFeedback from "@/components/pages/product/wrapper/components/feedbacks/filters/send-feedback/send-feedback";
import { Rate as RateCurrent } from "@/components/pages/product/wrapper/components/info/description/rate/rate";
import { IRatingCount } from "@/data-types/products/product-comments/product-comments";
import { useTranslations } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import css from "./filters.module.css";

interface props {
	loading: boolean;
	rating: number;
	all_rating: number;
	rating_count: IRatingCount;
	isComment: boolean;
}

const Filters = ({
	loading,
	rating: rate,
	all_rating,
	rating_count,
	isComment,
}: props) => {
	const { id } = useParams();
	const t = useTranslations();
	const items = useRatingMock();
	const searchParams = useSearchParams();

	items[0].count = all_rating;
	!!rating_count &&
		Array.from({ length: 5 }, (_, index) => {
			items[index + 1].count = Object.values(rating_count)[4 - index];
		});

	const rating: string | null = searchParams.get("rating");
	return (
		<div className={css.filters}>
			<RateCurrent
				noMargin
				rate={rate}
				count={all_rating}
			/>
			<h4 className={css.title}>{t("product.showOnFeedback")}</h4>
			<Rating
				loading={loading}
				checked={!rating}
				item={items[0]}
			/>
			{items.map(
				(item, index) =>
					index !== 0 && (
						<Rating
							loading={loading}
							hasIcon
							item={item}
							key={item.key}
						/>
					)
			)}
			{!isComment && <SendFeedback id={Number(id)} />}
		</div>
	);
};

export default Filters;
