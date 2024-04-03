import { useCallback, useMemo, useRef, useState } from "react";

type PrimitiveType = string | number | number | null | undefined;

/**
 * Props for the useClientSearch hook.
 * @template T The type of data being searched.
 */
interface SearchProps<T> {
	/**
	 * The data to search through.
	 */
	data: T[];

	/**
	 * The properties of T to search by.
	 *
	 * These should be properties that contain PrimitiveType values, as
	 * the search will only search through these properties.
	 */
	searchBy: {
		/**
		 * The key of T.
		 */
		[K in keyof T]: T[K] extends PrimitiveType ? K : never;
	}[keyof T][];
}

export const useClientSearch = <T>({ data, searchBy }: SearchProps<T>) => {
	const [searchValue, setSearchValue] = useState("");

	// React Hook that lets you defer updating a part of the UI.
	const deferredInputValueRef = useRef(searchValue);

	const filterData = useCallback(
		(data: T[], inputValue: string, searchBy: Array<keyof T>): T[] => {
			// Split the input value into search words
			const searchWords = inputValue.toLowerCase().trim().split(" ");

			// Function to check if a word is part of the item's property
			const isWordInProperty = (word: string, itemProperty: string) => {
				return itemProperty.toLowerCase().includes(word);
			};

			// Filter the data based on the search criteria
			const filteredData = data.filter((item) => {
				return searchWords.every((word) => {
					return searchBy.some((property) => {
						const itemProperty = item[property]?.toString() || "";
						return isWordInProperty(word, itemProperty);
					});
				});
			});

			return filteredData;
		},
		[]
	);

	const filteredData = useMemo(
		() => filterData(data, deferredInputValueRef.current, searchBy),
		[data, searchBy, filterData]
	);

	/**
	 * Callback to be used as the onChange handler of the input element
	 * that triggers the search.
	 *
	 * @param {React.ChangeEvent<HTMLInputElement>} e The event that triggered the change.
	 */
	const onSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		deferredInputValueRef.current = e.target.value;
		setSearchValue(e.target.value);
	};

	return { filteredData, searchValue, onSearchValueChange };
};
