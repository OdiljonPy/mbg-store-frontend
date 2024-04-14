import OrderCart from "@/components/pages/cart/common/order-card";
import { IOrderItem } from "@/data-types/order/order";
import OrderedItemSkeleton from "./skeleton/skeleton";

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
						<OrderCart
							key={item.id}
							product={{ ...item.product, count: item.quantity }}
						/>
					))}
				</>
			)}
		</>
	);
}

export default OrderedItemList;
