import { useClientSearch } from "@/hooks/use-client-search";
import { fetchShippingList } from "@/slices/shipping/shippingSlice";
import { AppDispatch, RootState } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeliveryList from "./components/delivery-list/delivery-list";
import Header from "./components/header/header";
import ObtainingChose from "./components/obtainingChose";
import PickupList from "./components/pickup-list/pickup-list";
import Search from "./components/search/search";
import { AddressBookSearchContext } from "./context/address-book-search-context";
import css from "./wrapper.module.css";

export type AddressBookTab = "delivery" | "pickup";

const Wrapper = () => {
	const [tab, setTab] = useState<AddressBookTab>("delivery");

	const { shippingList } = useSelector(
		(state: RootState) => state.shippingList
	);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchShippingList());
	}, [dispatch]);

	function changeTab(e: AddressBookTab) {
		setTab((prevState) => (prevState = e));
	}

	const { filteredData, onSearchValueChange, searchValue } = useClientSearch({
		data: shippingList,
		searchBy: ["address", "address_name", "latitude", "longitude"],
	});

	console.log(filteredData);

	return (
		<AddressBookSearchContext.Provider
			value={{ filteredData, searchValue, onSearchValueChange }}
		>
			<section className={css.wrapper}>
				<Header />
				{shippingList.length ? (
					<div className={css.search_box}>
						<Search />
					</div>
				) : null}
				<ObtainingChose tab={tab} changeTab={changeTab} />
				{tab === "delivery" && <DeliveryList />}
				{tab === "pickup" && <PickupList />}
			</section>
		</AddressBookSearchContext.Provider>
	);
};

export default Wrapper;
