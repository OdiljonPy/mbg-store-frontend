import { dataDelivery, dataPickup } from "../../data";
import AddressBookEmpty from "../address-book-empty/address-book-empty";
import PickupItem from "./pickup-item/pickup-item";
import css from "./pickup-list.module.css";

function PickupList() {
	if (!dataDelivery.length) {
		return <AddressBookEmpty />;
	}

	return (
		<ul className={css.list}>
			{dataPickup.map((item) => (
				<li key={item.id}>
					<PickupItem pickupItem={item} />
				</li>
			))}
		</ul>
	);
}

export default PickupList;
