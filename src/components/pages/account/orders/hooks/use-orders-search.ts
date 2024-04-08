import { useContext } from "react";
import { OrdersSearchContext } from "../context/orders-search-context";

export const useOrdersSearch = () => useContext(OrdersSearchContext);
