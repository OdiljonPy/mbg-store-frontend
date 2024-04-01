import Product from "@/components/shared/product/product";

import { RootState } from "@/store";
import { useSelector } from "react-redux";
import ProductsEmpty from "./favorites-empty/favorites-empty";
import css from "./favorites-list.module.css";

function ProductList() {
	const favorites = useSelector((state: RootState) => state.favorites);

	if (!favorites.length) {
		return <ProductsEmpty />;
	}

	return (
		<div className={css.list}>
			{favorites.map((product) => (
				<Product product={product} key={product.id} />
			))}
		</div>
	);
}

export default ProductList;
