import Product from "@/components/shared/product/product";

import ProductSkeleton from "@/components/shared/product/product-skeleton/product-skeleton";
import { updateFavourites } from "@/slices/favorites/favoritesSlice";
import { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFavoritesSearch } from "../../hooks/use-favorites-search";
import ProductsEmpty from "./favorites-empty/favorites-empty";
import css from "./favorites-list.module.css";

function ProductList() {
	const { favourites, loading } = useSelector(
		(state: RootState) => state.favorites
	);

	const { filteredData } = useFavoritesSearch();
	const dispatch = useDispatch<AppDispatch>();

	const token = localStorage.getItem("access_token");

	useEffect(() => {
		if (token) {
			dispatch(updateFavourites());
		}
	}, [dispatch, token]);

	if (loading)
		return (
			<div className={css.skeleton_container}>
				<ProductSkeleton />
				<ProductSkeleton />
				<ProductSkeleton />
				<ProductSkeleton />
			</div>
		);

	if (!favourites.length) {
		return <ProductsEmpty />;
	}

	return (
		<div className={css.list}>
			{filteredData.map((product) => (
				<Product
					product={product}
					key={product.id}
				/>
			))}
		</div>
	);
}

export default ProductList;
