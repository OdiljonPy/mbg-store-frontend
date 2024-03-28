import { dataDelivery } from "../../../data";
import AddressBookEmpty from "../address-book-empty/address-book-empty";
import DeliveryItem from "./delivery-item/delivery-item";
import css from "./delivery-list.module.css";

function DeliveryList() {
	if (!dataDelivery.length) {
		return <AddressBookEmpty />;
	}

	return (
		<ul className={css.list}>
			{dataDelivery.map((item) => (
				<li key={item.id}>
					<DeliveryItem deliveryItem={item} />
				</li>
			))}
		</ul>
	);
}

export default DeliveryList;
