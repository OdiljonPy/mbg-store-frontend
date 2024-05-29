import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Categories from "@/components/pages/home/popular/categories/categories";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import css from "./popular.module.css";

interface props {}

const Popular = (props: props) => {
	const { categories, loading } = useSelector(
		(state: RootState) => state.category
	);

	if (categories.length === 0 && !loading) return;

	return (
		<section className={css.popular}>
			<div className={"container"}>
				<HeadingLine
					heading={{
						title: "products.popular",
					}}
				/>
				<Categories />
			</div>
		</section>
	);
};

export default Popular;
