import { IOrder } from "@/data-types/order/order";
import { ChangeEvent, createContext } from "react";

interface OrdersSearchContextProps {
	filteredData: IOrder[];
	searchValue: string;
	onSearchValueChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const OrdersSearchContext = createContext<OrdersSearchContextProps>({
	filteredData: [] as IOrder[],
	searchValue: "",
	onSearchValueChange: () => {},
});
