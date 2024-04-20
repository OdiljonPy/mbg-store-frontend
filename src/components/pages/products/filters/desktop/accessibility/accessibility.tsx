import Item from "@/components/pages/products/filters/desktop/accessibility/item/item";
import css from "@/components/pages/products/filters/desktop/delivery/delivery.module.css";
import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import { ICustomCheckbox } from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import { useTranslations } from "next-intl";

interface props {}

export const accessibilityList: ICustomCheckbox[] = [
	{
		id: 1,
		title: "товары в наличии",
		count: 150,
	},
	{
		id: 2,
		title: "24/7",
		count: 15,
	},
];

const Accessibility = (props: props) => {
	const t = useTranslations();

	return (
		<FilterCollapse
			title={t("filters.accessibility.title")}
			queryResetList={["accessibility"]}
		>
			<div className={css.delivery}>
				{accessibilityList.map((item) => (
					<Item item={item} key={item.id} />
				))}
			</div>
		</FilterCollapse>
	);
};

export default Accessibility;
