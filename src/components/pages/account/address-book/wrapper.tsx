import { useState } from "react";
import DeliveryList from "./components/address-book-list/delivery-list/delivery-list";
import PickupList from "./components/address-book-list/pickup-list/pickup-list";
import Header from "./components/header/header";
import ObtainingChose from "./components/obtainingChose";
import Search from "./components/search/search";
import { dataDelivery } from "./data";
import css from "./wrapper.module.css";

export type AddressBookTab = "delivery" | "pickup";

const Wrapper = () => {
	const [tab, setTab] = useState<AddressBookTab>("delivery");

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
			<ObtainingChose
				tab={tab}
				changeTab={changeTab}
			/>
			{tab === "delivery" && <DeliveryList />}
			{tab === "pickup" && <PickupList />}
		</section>
	);
};

export default Wrapper;
