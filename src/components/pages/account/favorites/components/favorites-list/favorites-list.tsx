import Product from "@/components/shared/product/product";

import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useFavoritesSearch } from "../../hooks/use-favorites-search";
import ProductsEmpty from "./favorites-empty/favorites-empty";
import css from "./favorites-list.module.css";

function ProductList() {
	const {favourites} = useSelector((state: RootState) => state.favorites);

	
	const {filteredData} = useFavoritesSearch()
	
	if (!favourites.length) {
		return <ProductsEmpty />;
	}

	return (
		<div className={css.list}>
			{filteredData.map((product) => (
				<Product product={product} key={product.id} />
			))}
		</div>
	);
}

export default ProductList;
