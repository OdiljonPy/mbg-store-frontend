import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Filters from "@/components/pages/product/wrapper/components/feedbacks/filters/filters";
import List from "@/components/pages/product/wrapper/components/feedbacks/list/list";
import { IProductComments } from "@/data-types/products/product-comments/product-comments";
import css from "./feedbacks.module.css";

interface props {
	comments: IProductComments;
	loading: boolean;
	rating: number;
	rating_count: number;
	setOffset: (offset: number) => void;
	isComment: boolean;
}

const Feedbacks = ({
	comments,
	isComment,
	loading,
	rating,
	rating_count,
	setOffset,
}: props) => {
	return (
		<section className={css.feedback}>
			<HeadingLine
				small
				heading={{
					title: "product.feedback",
				}}
			/>
			<div className={css.wrapper}>
				<Filters
					isComment={isComment}
					rating_count={comments?.rating_count}
					rating={rating}
					all_rating={rating_count}
					loading={loading}
				/>
				<List
					comments={comments}
					loading={loading}
					setOffset={(offset) => setOffset(offset)}
				/>
			</div>
		</section>
	);
};

export default Feedbacks;
