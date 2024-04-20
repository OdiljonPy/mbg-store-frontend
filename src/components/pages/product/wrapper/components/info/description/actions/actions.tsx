import React from "react";
import css from "./actions.module.css";
import AddToCard from "@/components/pages/product/wrapper/components/info/description/actions/add-to-card/add-to-card";
import AddToFav from "@/components/shared/add-to-fav/add-to-fav";
import {IProduct} from "@/data-types/products/common";

interface props {
	product : IProduct
}

const Actions = ({product}: props) => {
	return (
		<div className={css.actions}>
			<AddToCard product={product} />
			<AddToFav product={product}/>
		</div>
	);
};

export default Actions;
