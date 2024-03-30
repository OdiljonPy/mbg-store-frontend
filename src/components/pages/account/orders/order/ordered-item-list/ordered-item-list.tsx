import { IOrderItem } from "@/data-types/order/order";
import OrderedItemSkeleton from "./ordered-item-skeleton";
import OrderedItem from "./ordered-item/ordered-item";

interface Props {
	orderedItems: IOrderItem[];
	loading: boolean;
}

function OrderedItemList({ orderedItems, loading }: Props) {
	return (
		<>
			{loading ? (
				<>
					{Array.from({ length: 3 }).map((_, index) => (
						<OrderedItemSkeleton key={index} />
					))}
				</>
			) : (
				<>
					{orderedItems?.map((item) => (
						<OrderedItem
							key={item.id}
							orderedItem={item}
						/>
					))}
				</>
			)}
		</>
	);
}

export default OrderedItemList;
