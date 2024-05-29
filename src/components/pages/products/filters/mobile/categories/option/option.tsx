import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { ICategory } from "@/data-types/categories/categories";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import css from "./option.module.css";

interface props {
	item: ICategory;
	onClose: () => void;
}

const Option = ({ item, onClose }: props) => {
	const { push, query } = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const category: string | null = searchParams.get("category_id");
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

		onClose();
	};

	return (
		<label onClick={onChangeCategory} className={css.item}>
			<input type={"radio"} className={css.input} value={id} />
			<span className={css.info}>
				<span className={css.icon}>
					<ResponsiveImage src={icon} alt={name} />
				</span>
				<span
					className={`${css.label} text-mobile-size ${
						category === id.toString() ? css.active : ""
					}`}
				>
					{name}
				</span>
			</span>
			<span className={`${css.count} text-mobile-size`}>
				{count_product}
			</span>
		</label>
	);
};

export default Option;
