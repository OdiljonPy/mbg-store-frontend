import css from "@/components/pages/products/filters/mobile/categories/body/category-item/category-item.module.css";
import { BoolFields } from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import { ICustomCheckbox } from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

interface props {
	item: ICustomCheckbox;
	boolName?: BoolFields | undefined;
}

const SalesItem = ({ item, boolName }: props) => {
	const { push, query } = useRouter();
	const searchParams = useSearchParams();
	const pathname: string = usePathname();

	const sale = searchParams.get("sale");

	const { title, id } = item;

	const onSetRating = () => {
		const queries = {
			...query,
		};

		queries.sale = String(item.id);
		delete queries.onSales;

		push(
			{
				pathname,
				query: {
					...queries,
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
			onClick={onSetRating}
			className={`${css.item} ${
				sale === id.toString() ? css.active : ""
			}`}
		>
			<input className={css.input} value={id} type={"radio"} />
			<span className={css.title}>{title}</span>
		</label>
	);
};

export default SalesItem;
