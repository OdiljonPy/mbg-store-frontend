import { IShipping } from "@/data-types/shipping";
import { ChangeEvent, createContext } from "react";

interface AddressBookSearchContextProps {
	filteredData: IShipping[];
	searchValue: string;
	onSearchValueChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const AddressBookSearchContext = createContext<AddressBookSearchContextProps>({
	filteredData: [] as IShipping[],
	searchValue: "",
	onSearchValueChange: () => {},
});
