import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { ICategory } from "@/data-types/categories/categories";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import css from "./category.module.css";

interface props {
	category: ICategory;
}

const Category = ({ category }: props) => {
	const { push, query } = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentCategory: string | null = searchParams.get("category_id");
	const { id, icon: img, name, count_product } = category;

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
		<button onClick={onChangeCategory} className={`${css.item} `}>
			<span className={css.info}>
				<span className={css.img}>
					<ResponsiveImage src={img} alt={name} />
				</span>
				<span
					className={`${css.text} ${
						Number(currentCategory) == id ? css.active : ""
					}`}
				>
					{name}
				</span>
			</span>
			<span className={css.count}>
				<span>{count_product}</span>
			</span>
		</button>
	);
};

export default Category;
