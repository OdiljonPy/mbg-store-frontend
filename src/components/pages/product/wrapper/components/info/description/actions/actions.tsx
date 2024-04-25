import React from "react";
import css from "./actions.module.css";
import AddToCard from "@/components/pages/product/wrapper/components/info/description/actions/add-to-card/add-to-card";
import {IProduct} from "@/data-types/products/common";
import dynamic from "next/dynamic";

const ClientAddToFav = dynamic(()=> import("@/components/shared/add-to-fav/add-to-fav"),{
	ssr:false
})

interface props {
	product : IProduct
}

const Actions = ({product}: props) => {
	return (
		<div className={css.actions}>
			<AddToCard product={product} />
			<ClientAddToFav product={product}/>
		</div>
	);
};

export default Actions;
