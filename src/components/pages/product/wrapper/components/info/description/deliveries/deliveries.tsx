import Delivery from "@/components/pages/product/wrapper/components/info/description/delivery/delivery";
import { Pickup } from "../pickup";
import css from "./deliveries.module.css";

interface props {
	pickup?: boolean;
	free_shipping?: boolean;
	freeShippingDistance?: number;
}

const Deliveries = ({ pickup, free_shipping, freeShippingDistance }: props) => {
	return (
		<div className={css.wrapper}>
			{free_shipping ? (
				<Delivery freeShippingDistance={freeShippingDistance} />
			) : (
				""
			)}
			{pickup ? <Pickup /> : ""}
		</div>
	);
};

export default Deliveries;
