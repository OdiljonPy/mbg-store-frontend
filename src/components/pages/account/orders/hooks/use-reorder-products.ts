import { IOrderItem } from "@/data-types/order/order";
import { setProducts } from "@/slices/basket/basketSlice";
import { AppDispatch } from "@/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export const useReorderProducts = (orderedItems: IOrderItem[]) => {
	const dispatch = useDispatch<AppDispatch>();
	const { push } = useRouter();

	const reorderItems = () => {
		const basketProducts = [];
		for (let i = 0; i < orderedItems.length; i++) {
			const item = orderedItems[i];
			basketProducts.push({
				product: item.product,
				quantity: item.quantity,
			});
		}

		dispatch(setProducts(basketProducts));
		push("/cart");
	};

	return { reorderItems };
};
