import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";
import Body from "@/components/pages/products/filters/mobile/stores/body/body";
import Option from "@/components/pages/products/filters/mobile/stores/option/option";
import Button from "@/components/shared/button";
import { ICustomCheckbox } from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import { useModal } from "@/hooks/use-modal";
import { fetchStories } from "@/slices/all_store/StoriesSlices";
import { AppDispatch, RootState } from "@/store";
import { Drawer } from "antd";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useReset } from "../hooks/use-reset";

interface props {}

const Stores = (props: props) => {
	const dispatch = useDispatch<AppDispatch>();
	const { stories, loading } = useSelector(
		(state: RootState) => state.all_stories
	);
	const t = useTranslations();
	const { open, onOpen, onClose } = useModal(true);
	const { onReset } = useReset(["stores"]);

	const [storeList, setStoreList] = useState<ICustomCheckbox[]>([]);

	useEffect(() => {
		const fetchStoreList: ICustomCheckbox[] = [];
		dispatch(fetchStories())
			.unwrap()
			.then((res) => {
				if (res.ok) {
					res.result?.map((store) => {
						fetchStoreList.push({
							id: store.id,
							title: store.brand_name,
							count: store.customers_count,
						});
					});
				}
				setStoreList(fetchStoreList);
			});
	}, []);

	return (
		<>
			<div className={css.item}>
				<TopBar
					resetItems={["stores"]}
					title={t("header.stores")}
					onOpen={onOpen}
				/>
				<Body storeList={storeList} />
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
						title: t("header.stores"),
						onClose,
						onReset,
						count: stories?.length ?? 0,
					}}
				/>
				<div className={css.inner}>
					{loading
						? "...loading"
						: storeList.map((store) => (
								<Option item={store} key={store.id} />
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

export default Stores;
