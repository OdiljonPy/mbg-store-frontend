import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import { useSalesList } from "@/components/pages/products/filters/mobile/hooks/sales-list";
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";
import Body from "@/components/pages/products/filters/mobile/sales/body/body";
import Option from "@/components/pages/products/filters/mobile/sales/option/option";
import Button from "@/components/shared/button";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import Switch from "@/components/shared/switch/switch";
import { useModal } from "@/hooks/use-modal";
import { Drawer } from "antd";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useReset } from "../hooks/use-reset";

interface props {}

const Sales = (props: props) => {
	const { onReset } = useReset(["sales", "onSales"]);
	const t = useTranslations();
	const { open, onOpen, onClose } = useModal(true);
	const salesList = useSalesList();
	const { push, query } = useRouter();
	const searchParams = useSearchParams();
	const pathname: string = usePathname();

	const sales = searchParams.get("sales");
	const onSales = searchParams.get("onSales");

	const onEnableSales = (checked: boolean) => {
		const queries: ParsedUrlQuery = {
			...query,
		};
		if (checked) {
			queries.onSales = "true";
			delete queries.sale;
		} else {
			delete queries.onSales;
		}

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
		<>
			<div className={css.item}>
				<TopBar
					resetItems={["sales", "onSales"]}
					title={t("sales.sale")}
					onOpen={onOpen}
				/>
				<Switch
					checked={!!onSales}
					title={t("sales.title")}
					onChange={onEnableSales}
				/>
				<Body />
			</div>
			<Drawer
				classNames={{
					body: "custom-body",
				}}
				open={open}
				closeIcon={false}
				placement={"bottom"}
				height={"100%"}
				onClose={onClose}
			>
				<DrawerHeader
					options={{
						title: t("sales.sale"),
						onClose,
						onReset,
						count: sales?.length ?? 0,
					}}
				/>
				<div className={css.inner}>
					<Switch
						title={t("sales.title")}
						checked={!!onSales}
						onChange={onEnableSales}
					/>
					{salesList.map((item) => (
						<Option item={item} key={item.id} />
					))}
				</div>
				<div className={css.fixed_btn}>
					<Button full onClick={onClose}>
						{t("apply")}
					</Button>
				</div>
			</Drawer>
		</>
	);
};

export default Sales;
