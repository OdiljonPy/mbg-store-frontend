import { IProduct } from "@/data-types/products/common";
import { ChangeEvent, createContext } from "react";

interface FavoritesSearchContextProps {
	filteredData: IProduct[];
	searchValue: string;
	onSearchValueChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const FavoritesSearchContext = createContext<FavoritesSearchContextProps>({
	filteredData: [] as IProduct[],
	searchValue: "",
	onSearchValueChange: () => {},
});
