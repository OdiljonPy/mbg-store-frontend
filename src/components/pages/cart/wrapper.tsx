import Contents from "@/components/pages/cart/contents/contents";
import Favourites from "@/components/pages/cart/favourites/favourites";
import Total from "@/components/pages/cart/total/total";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { calcPrices, checkProductAvailable } from "@/slices/basket/basketSlice";
import { updateFavourites } from "@/slices/favorites/favoritesSlice";
import { AppDispatch, RootState } from "@/store";
import { cn } from "@/utils/cn";
import { Badge } from "antd";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./wrapper.module.css";
interface props {}

const Wrapper = (props: props) => {
	const basketSlices = useSelector((state: RootState) => state.basket);
	const { favourites, total_count } = useSelector(
		(state: RootState) => state.favorites
	);

	const { newFavourites } = useSelector((state: RootState) => state.favorites);
	const dispatch = useDispatch<AppDispatch>();
	const t = useTranslations();

	dispatch(calcPrices());

	const products = basketSlices.products.map((product) => {
		return {
			id: product.id,
			count: product?.count,
		};
	});

	basketSlices.not_available?.forEach((product) => {
		const idx = products.findIndex(
			(allProduct) => allProduct.id === product.id
		);
		if (idx === -1) {
			products.push({
				id: product.id,
				count: product.count,
			});
		}
	});

	useEffect(() => {
		if (products.length > 0) {
			dispatch(checkProductAvailable([...products]));
		}
		const token = localStorage.getItem("access_token");
		if (token) {
			dispatch(updateFavourites());
		}
	}, [dispatch]);
	return (
		<section className={cn("container", css.cart)}>
			<Breadcrumbs
				className={css.breadcrumb}
				items={[
					{
						path: "/",
						label: t("header.home"),
					},
					{
						path: "/cart",
						label: t("header.basket"),
					},
				]}
			/>
			<h1 className={css.title}>
				{t("header.basket")}{" "}
				<Badge
					count={
						basketSlices.totalCountProduct ? basketSlices.totalCountProduct : 0
					}
					color={"#39B969"}
				/>
			</h1>
			<div className={css.wrapper}>
				<Contents basketSlices={basketSlices} />
				<Total basketSlice={basketSlices} />
			</div>

			{total_count ? <Favourites /> : ""}
		</section>
	);
};

export default Wrapper;
