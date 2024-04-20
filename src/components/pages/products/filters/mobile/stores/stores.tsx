import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import { IFilters } from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
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
import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

interface props {}

const Stores = (props: props) => {
	const dispatch = useDispatch<AppDispatch>();
	const { stories, loading } = useSelector(
		(state: RootState) => state.all_stories
	);
	const t = useTranslations();
	const { open, onOpen, onClose } = useModal(true);
	const { watch, setValue } = useFormContext<IFilters>();
	const stores: string[] | undefined = watch("stores");

	const [storeList, setStoreList] = useState<ICustomCheckbox[]>([
		{
			id: 1,
			title: "Зеленая лавка",
			count: 2132,
		},
	]);

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
	const onReset = () => {
		setValue("stores", undefined);
	};
	return (
		<>
			<div className={css.item}>
				<TopBar
					onReset={stores?.length ? onReset : undefined}
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
						count: stores?.length ?? 0,
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
						{t("show")}
					</Button>
				</div>
			</Drawer>
		</>
	);
};

export default Stores;
