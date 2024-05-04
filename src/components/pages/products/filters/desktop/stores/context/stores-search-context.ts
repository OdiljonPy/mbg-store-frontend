import { IProduct } from "@/data-types/products/common";
import { ChangeEvent, createContext } from "react";
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";

interface StoreSearchContextProps {
    filteredData: ICustomCheckbox[];
    searchValue: string;
    onSearchValueChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const StoriesSearchContext = createContext<StoreSearchContextProps>({
    filteredData: [] as ICustomCheckbox[],
    searchValue: "",
    onSearchValueChange: () => {},
});
