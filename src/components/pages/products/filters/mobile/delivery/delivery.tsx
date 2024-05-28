import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import Body from "@/components/pages/products/filters/mobile/delivery/body/body";
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";
import Switch from "@/components/shared/switch/switch";
import { useModal } from "@/hooks/use-modal";
import { useTranslations } from "next-intl";

import Option from "@/components/pages/products/filters/mobile/delivery/option/option";
import { useDeliveryOptions } from "@/components/pages/products/filters/mobile/hooks/use-delivery-options";
import Button from "@/components/shared/button";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import { Drawer } from "antd";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useReset } from "../hooks/use-reset";

interface props {}

const Delivery = (props: props) => {
	const t = useTranslations();
	const { open, onOpen, onClose } = useModal(true);
	const deliveryOptions = useDeliveryOptions();
	const { onReset } = useReset(["delivery", "hasDelivery"]);
	const { push, query } = useRouter();
	const searchParams = useSearchParams();
	const pathname: string = usePathname();

	const hasDelivery: boolean | undefined =
		searchParams.get("hasDelivery") === "true";
	const delivery: string[] | undefined = searchParams
		.get("delivery")
		?.split(",");

	const onEnableSales = (checked: boolean) => {
		const queries: ParsedUrlQuery = {
			...query,
		};

		if (checked) {
			queries.hasDelivery = "true";
		} else {
			delete queries.hasDelivery;
			delete queries.delivery;
		}
		push(
			{
				pathname,
				query: {
					...queries,
					// changeFilter : searchParams.get('changeFilter') === 'true' ? 'false' : 'true'
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
					resetItems={["delivery", "hasDelivery"]}
					title={t("filters.delivery.title")}
					onOpen={onOpen}
				/>
				<Switch
					checked={!!hasDelivery}
					title={t("filters.delivery.has")}
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
						count: delivery?.length ?? 0,
					}}
				/>
				<div className={css.inner}>
					<Switch
						checked={!!hasDelivery}
						title={t("filters.delivery.has")}
						onChange={onEnableSales}
					/>
					{deliveryOptions.map((item) => (
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

export default Delivery;
