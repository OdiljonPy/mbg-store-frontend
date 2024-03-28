import Product from "@/components/shared/product/product";
import { data } from "../../data";

import css from "./favorites-list.module.css";
import ProductsEmpty from "./favorites-empty/favorites-empty";

function ProductList() {
	if (!data.length) {
		return <ProductsEmpty />;
	}

	return (
		<div className={css.list}>
			{data.map((product) => (
				<Product
					product={product}
					key={product.id}
				/>
			))}
		</div>
	);
}

export default ProductList;
