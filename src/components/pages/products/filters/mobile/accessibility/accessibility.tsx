import { accessibilityList } from "@/components/pages/products/filters/desktop/accessibility/accessibility";
import Body from "@/components/pages/products/filters/mobile/accessibility/body/body";
import Option from "@/components/pages/products/filters/mobile/accessibility/option/option";
import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";
import Button from "@/components/shared/button";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import { useModal } from "@/hooks/use-modal";
import { Drawer } from "antd";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useReset } from "../hooks/use-reset";
interface props {}

const Accessibility = (props: props) => {
	const t = useTranslations();
	const { onReset } = useReset(["accessibility"]);
	const { push, query } = useRouter();
	const searchParams = useSearchParams();
	const pathname: string = usePathname();

	const accessibility = searchParams.get("accessibility");

	const { open, onClose, onOpen } = useModal(true);

	return (
		<>
			<div className={css.item}>
				<TopBar
					resetItems={["accessibility"]}
					title={t("filters.accessibility.title")}
					onOpen={onOpen}
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
						title: t("filters.accessibility.title"),
						onClose,
						onReset,
						count: accessibility?.length ?? 0,
					}}
				/>
				<div className={css.inner}>
					{accessibilityList.map((item) => (
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

export default Accessibility;
