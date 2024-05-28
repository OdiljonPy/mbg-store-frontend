import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { ICategory } from "@/data-types/categories/categories";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import css from "./category-item.module.css";

interface props {
	item: ICategory;
}

const CategoryItem = ({ item }: props) => {
	const { push, query } = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentCategory: string | null = searchParams.get("category_id");
	const { icon: icon, name, count_product, id } = item;

	const onChangeCategory = () => {
		push(
			{
				pathname,
				query: {
					...query,
					category_id: id,
					changeFilter:
						searchParams.get("changeFilter") === "true"
							? "false"
							: "true",
				},
			},
			undefined,
			{
				scroll: false,
			}
		);
	};

	return (
		<label
			onClick={onChangeCategory}
			className={`${css.item} ${
				currentCategory === id.toString() ? css.active : ""
			}`}
		>
			<input className={css.input} value={id} type={"radio"} />
			<span className={css.icon}>
				<ResponsiveImage src={icon} alt={name} />
			</span>
			<span className={css.title}>{name}</span>
			<span className={css.count}>{count_product}</span>
		</label>
	);
};

export default CategoryItem;
