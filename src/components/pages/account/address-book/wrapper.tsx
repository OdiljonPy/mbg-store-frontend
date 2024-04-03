import { fetchShippingList } from "@/slices/shipping/shippingSlice";
import { AppDispatch } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DeliveryList from "./components/delivery-list/delivery-list";
import Header from "./components/header/header";
import ObtainingChose from "./components/obtainingChose";
import PickupList from "./components/pickup-list/pickup-list";
import Search from "./components/search/search";
import { dataDelivery } from "./data";
import css from "./wrapper.module.css";

export type AddressBookTab = "delivery" | "pickup";

const Wrapper = () => {
	const [tab, setTab] = useState<AddressBookTab>("delivery");

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchShippingList());
	}, [dispatch]);

	function changeTab(e: AddressBookTab) {
		setTab((prevState) => (prevState = e));
	}

	return (
		<section className={css.wrapper}>
			<Header />
			{dataDelivery.length ? (
				<div className={css.search_box}>
					<Search />
				</div>
			) : null}
			<ObtainingChose tab={tab} changeTab={changeTab} />
			{tab === "delivery" && <DeliveryList />}
			{tab === "pickup" && <PickupList />}
		</section>
	);
};

export default Wrapper;
