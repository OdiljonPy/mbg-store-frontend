import React from "react";
import css from "./deliveries.module.css";
import Delivery from "@/components/pages/product/wrapper/components/info/description/delivery/delivery";
import Pickup from "@/components/pages/product/wrapper/components/info/description/pickup";

interface props {}

const Deliveries = (props: props) => {
	return (
		<div className={css.deliveries}>
			<Delivery isWhite />
			<Pickup isWhite />
		</div>
	);
};

export default Deliveries;
