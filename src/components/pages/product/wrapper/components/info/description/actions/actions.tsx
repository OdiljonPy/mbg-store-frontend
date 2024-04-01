import React from "react";
import css from "./actions.module.css";
import AddToCard from "@/components/pages/product/wrapper/components/info/description/actions/add-to-card/add-to-card";
import AddToFav from "@/components/shared/add-to-fav/add-to-fav";
import { IProductInner } from "@/data-types/products/product-inner/product-inner";

interface props {
	info: IProductInner;
}

const Actions = (props: props) => {
	return (
		<div className={css.actions}>
			<AddToCard />
			<AddToFav
				info={props.info}
				id={1}
			/>
		</div>
	);
};

export default Actions;
