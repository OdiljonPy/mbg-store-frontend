import { dataDelivery, dataPickup } from "../../../data";
import AddressBookEmpty from "../address-book-empty/address-book-empty";
import css from "./pickup-list.module.css";
import PickupItem from "./pickup-item/pickup-item";

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
