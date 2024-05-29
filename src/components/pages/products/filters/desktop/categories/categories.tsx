import Category from "@/components/pages/products/filters/desktop/categories/category/category";
import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import { RootState } from "@/store";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";

interface props {}

const Categories = ({}: props) => {
	const { categories, loading } = useSelector(
		(state: RootState) => state.category
	);
	const t = useTranslations();

	return (
		<FilterCollapse
			title={t("categories.title")}
			queryResetList={["category", "category_id"]}
		>
			{loading
				? "...loading"
				: categories.map((category) => (
						<Category category={category} key={category.id} />
				  ))}
		</FilterCollapse>
	);
};

export default Categories;
