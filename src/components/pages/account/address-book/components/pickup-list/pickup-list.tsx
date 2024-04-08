import { dataPickup } from "../../data";
import PickupEmpty from "./pickup-empty/pickup-empty";
import PickupItem from "./pickup-item/pickup-item";
import css from "./pickup-list.module.css";

function PickupList() {
	if (!dataPickup.length) {
		return <PickupEmpty />;
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
