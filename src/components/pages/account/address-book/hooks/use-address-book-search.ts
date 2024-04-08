import { useContext } from "react";
import { AddressBookSearchContext } from "../context/address-book-search-context";

export const useAddressBookSearch = () => useContext(AddressBookSearchContext);
