import { IOrderItem } from "@/data-types/order/order";
import { setProducts } from "@/slices/basket/basketSlice";
import { AppDispatch } from "@/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export const useReorderProducts = (orderedItems: IOrderItem[]) => {
	const dispatch = useDispatch<AppDispatch>();
	const { push } = useRouter();

	const reorderItems = () => {
		dispatch(setProducts(orderedItems.map((item) => item.product)));
		push("/cart");
	};

	return { reorderItems };
};
