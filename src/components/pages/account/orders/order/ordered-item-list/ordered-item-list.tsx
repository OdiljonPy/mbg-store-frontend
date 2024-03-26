import { IOrderItem } from "@/data-types/order/order";
import OrderedItem from "./ordered-item/ordered-item";

interface Props {
	orderedItems: IOrderItem[];
}

function OrderedItemList({ orderedItems }: Props) {
	return (
		<>
			{orderedItems.map((item) => (
				<OrderedItem
					key={item.id}
					orderedItem={item}
				/>
			))}
		</>
	);
}

export default OrderedItemList;
