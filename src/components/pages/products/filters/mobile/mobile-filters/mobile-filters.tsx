import Accessibility from "@/components/pages/products/filters/mobile/accessibility/accessibility";
import Categories from "@/components/pages/products/filters/mobile/categories/categories";
import Delivery from "@/components/pages/products/filters/mobile/delivery/delivery";
import Prices from "@/components/pages/products/filters/mobile/prices/prices";
import Rating from "@/components/pages/products/filters/mobile/rating/rating";
import Sales from "@/components/pages/products/filters/mobile/sales/sales";
import Stores from "@/components/pages/products/filters/mobile/stores/stores";
import Button from "@/components/shared/button";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import { raleway } from "@/constants/fonts/fonts";
import { IProductFilter } from "@/data-types/products/product-filter/product-filter";
import { useModal } from "@/hooks/use-modal";
import { RootState } from "@/store";
import { Drawer } from "antd";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Location from "../location";
import css from "./mobile-filters.module.css";

interface props {
	data: IProductFilter;
}

const diffFilters: string[] = [
	"filters",
	"changeFilter",
	"search",
	"sort",
	"hasDelivery",
	"id",
];

const MobileFilters = ({}: props) => {
	const t = useTranslations();
	const { open, onClose, onOpen } = useModal();

	const { push, query } = useRouter();
	const searchParams = useSearchParams();
	const pathname: string = usePathname();
	const filters: string | null = searchParams.get("filters");

	const activeFilters = Object.keys(query).filter(
		(item) => !diffFilters.includes(item)
	);
	useEffect(() => {
		if (activeFilters.length) {
			push({
				pathname,
				query: {
					...query,
				},
			});
		}
	}, [activeFilters.length]);
	const onReset = () =>
		push(
			{
				pathname,
				query: {
					filters: filters,
					sort: "popular",
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

	const { entities, loading } = useSelector(
		(state: RootState) => state.product
	);

	const endingMap: { [key: number]: string } = {
		1: "ов",
		2: "а",
		3: "а",
		4: "а",
		5: "ов",
		6: "ов",
		7: "ов",
		8: "ов",
		9: "ов",
		0: "ов",
	};

	return (
		<>
			<button
				onClick={onOpen}
				className={`${css.btn} ${raleway.className}`}
			>
				<svg
					className={css.icon}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						className={css.path}
						d='M3.75 8.24999H6.84375C7.00898 8.8953 7.38428 9.46727 7.91048 9.87572C8.43669 10.2842 9.08387 10.5059 9.75 10.5059C10.4161 10.5059 11.0633 10.2842 11.5895 9.87572C12.1157 9.46727 12.491 8.8953 12.6562 8.24999H20.25C20.4489 8.24999 20.6397 8.17097 20.7803 8.03032C20.921 7.88967 21 7.6989 21 7.49999C21 7.30108 20.921 7.11032 20.7803 6.96966C20.6397 6.82901 20.4489 6.74999 20.25 6.74999H12.6562C12.491 6.10468 12.1157 5.53271 11.5895 5.12426C11.0633 4.71581 10.4161 4.49411 9.75 4.49411C9.08387 4.49411 8.43669 4.71581 7.91048 5.12426C7.38428 5.53271 7.00898 6.10468 6.84375 6.74999H3.75C3.55109 6.74999 3.36032 6.82901 3.21967 6.96966C3.07902 7.11032 3 7.30108 3 7.49999C3 7.6989 3.07902 7.88967 3.21967 8.03032C3.36032 8.17097 3.55109 8.24999 3.75 8.24999ZM9.75 5.99999C10.0467 5.99999 10.3367 6.08797 10.5834 6.25279C10.83 6.41761 11.0223 6.65188 11.1358 6.92597C11.2494 7.20006 11.2791 7.50166 11.2212 7.79263C11.1633 8.0836 11.0204 8.35087 10.8107 8.56065C10.6009 8.77043 10.3336 8.91329 10.0426 8.97117C9.75166 9.02905 9.45006 8.99934 9.17597 8.88581C8.90189 8.77228 8.66762 8.58002 8.5028 8.33335C8.33797 8.08667 8.25 7.79666 8.25 7.49999C8.25 7.10217 8.40804 6.72064 8.68934 6.43933C8.97064 6.15803 9.35218 5.99999 9.75 5.99999ZM20.25 15.75H18.6562C18.491 15.1047 18.1157 14.5327 17.5895 14.1243C17.0633 13.7158 16.4161 13.4941 15.75 13.4941C15.0839 13.4941 14.4367 13.7158 13.9105 14.1243C13.3843 14.5327 13.009 15.1047 12.8438 15.75H3.75C3.55109 15.75 3.36032 15.829 3.21967 15.9697C3.07902 16.1103 3 16.3011 3 16.5C3 16.6989 3.07902 16.8897 3.21967 17.0303C3.36032 17.171 3.55109 17.25 3.75 17.25H12.8438C13.009 17.8953 13.3843 18.4673 13.9105 18.8757C14.4367 19.2842 15.0839 19.5059 15.75 19.5059C16.4161 19.5059 17.0633 19.2842 17.5895 18.8757C18.1157 18.4673 18.491 17.8953 18.6562 17.25H20.25C20.4489 17.25 20.6397 17.171 20.7803 17.0303C20.921 16.8897 21 16.6989 21 16.5C21 16.3011 20.921 16.1103 20.7803 15.9697C20.6397 15.829 20.4489 15.75 20.25 15.75ZM15.75 18C15.4533 18 15.1633 17.912 14.9166 17.7472C14.67 17.5824 14.4777 17.3481 14.3642 17.074C14.2506 16.7999 14.2209 16.4983 14.2788 16.2074C14.3367 15.9164 14.4796 15.6491 14.6893 15.4393C14.8991 15.2296 15.1664 15.0867 15.4574 15.0288C15.7483 14.9709 16.0499 15.0006 16.324 15.1142C16.5981 15.2277 16.8324 15.42 16.9972 15.6666C17.162 15.9133 17.25 16.2033 17.25 16.5C17.25 16.8978 17.092 17.2793 16.8107 17.5607C16.5294 17.842 16.1478 18 15.75 18Z'
						fill='#232323'
					/>
				</svg>
				<span className={css.text}>{t("filters.title")}</span>
			</button>
			<Drawer
				classNames={{
					body: "custom-body",
				}}
				closeIcon={false}
				onClose={onClose}
				placement={"bottom"}
				height={"100%"}
				open={open}
			>
				<DrawerHeader
					options={{
						title: t("filters.title"),
						onClose,
						onReset,
						count: activeFilters.length || undefined,
					}}
				/>
				<div className={css.wrapper}>
					<Categories />
					<Prices />
					<Stores />
					<Sales />
					<Rating />
					<Location />
					<Delivery />
					<Accessibility />
					<div className={css.fixed_btn}>
						<Button full onClick={onClose} loading={loading}>
							{t("show", {
								count: entities.totalElements || 0,
								ending:
									entities.totalElements !== 1
										? endingMap[entities.totalElements % 10]
										: "",
							})}
						</Button>
					</div>
				</div>
			</Drawer>
		</>
	);
};

export default MobileFilters;
