import ProductsEmpty from "@/components/pages/account/favorites/components/favorites-list/favorites-empty/favorites-empty";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import Product from "@/components/shared/product/product";
import ProductSkeleton from "@/components/shared/product/product-skeleton/product-skeleton";
import { updateFavourites } from "@/slices/favorites/favoritesSlice";
import { AppDispatch, RootState } from "@/store";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./wrapper.module.css";

const Wrapper = () => {
	const t = useTranslations();
	const { favourites, total_count, loading } = useSelector(
		(state: RootState) => state.favorites
	);
	const dispatch = useDispatch<AppDispatch>();
	const [isShow, setIsShow] = useState(total_count > 0);

	useEffect(() => {
		if (total_count > 0) {
			setIsShow(true);
		} else setIsShow(false);
	}, [favourites]);

	const token = localStorage.getItem("access_token");

	useEffect(() => {
		if (token) {
			dispatch(updateFavourites());
		}
	}, [dispatch, token]);

	return (
		<section className={css.favourite}>
			<div className='container'>
				<Breadcrumbs
					items={[
						{
							path: "/",
							label: t("header.home"),
						},
						{
							path: "/favourites",
							label: t("header.favourites"),
						},
					]}
				/>
				<h2 className={css.title}>{t("header.favorites")}</h2>
				{loading ? (
					<div className={css.skeleton_container}>
						<ProductSkeleton />
						<ProductSkeleton />
						<ProductSkeleton />
						<ProductSkeleton />
					</div>
				) : isShow ? (
					<div className={css.wrapper}>
						{favourites.map((product) => (
							<Product
								product={product}
								isNotSwiper
								key={product.id}
							/>
						))}
					</div>
				) : (
					<ProductsEmpty />
				)}
			</div>
		</section>
	);
};

export default Wrapper;
