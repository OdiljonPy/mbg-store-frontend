import Body from "@/components/pages/products/filters/mobile/categories/body/body";
import Option from "@/components/pages/products/filters/mobile/categories/option/option";
import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import { useModal } from "@/hooks/use-modal";
import { RootState } from "@/store";
import { Drawer } from "antd";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { useReset } from "../hooks/use-reset";

interface props {}

const Categories = ({}: props) => {
	const { categories, loading } = useSelector(
		(state: RootState) => state.category
	);
	const t = useTranslations();
	const { open, onClose, onOpen } = useModal(true);
	const searchParams = useSearchParams();
	const currentCategory: string | null = searchParams.get("category_id");
	const { onReset } = useReset();

	return (
		<>
			<div className={css.item}>
				<TopBar
					resetItems={["category_id", "category"]}
					title={t("categories.title")}
					onOpen={onOpen}
				/>
				<Body categories={categories} loading={loading} />
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
						title: t("categories.title"),
						onClose,
						onReset,
						count: currentCategory ? 1 : undefined,
					}}
				/>
				<div className={css.inner}>
					{loading
						? "...loading"
						: categories.map((category) => (
								<Option
									onClose={onClose}
									item={category}
									key={category.id}
								/>
						  ))}
				</div>
			</Drawer>
		</>
	);
};

export default Categories;
