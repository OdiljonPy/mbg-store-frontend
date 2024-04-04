import FormError from "@/components/shared/form-error/form-error";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import AddressBookEmpty from "../address-book-empty/address-book-empty";
import AddNewAddressModal from "../modals/add-address-modal";
import DeliveryItem from "./delivery-item/delivery-item";
import css from "./delivery-list.module.css";
import AddressBookSkeleton from "./skeleton/skeleton";

function DeliveryList() {
	const { shippingList, loading, error } = useSelector(
		(state: RootState) => state.shippingList
	);
	if (loading)
		return (
			<ul className={css.list}>
				{Array.from({ length: 3 }).map((_, index) => (
					<li key={index}>
						<AddressBookSkeleton />
					</li>
				))}
			</ul>
		);
	if (error)
		return <FormError error='Something went wrong! Try again later.' />;

	if (!shippingList.length) {
		return <AddressBookEmpty />;
	}

	const sortedShippingList = shippingList.slice().sort((a, b) => {
		if (a.main_address && !b.main_address) {
			return -1;
		} else if (!a.main_address && b.main_address) {
			return 1;
		} else {
			return 0;
		}
	});

	return (
		<>
			<ul className={css.list}>
				{sortedShippingList.map((item) => (
					<li key={item.id}>
						<DeliveryItem deliveryItem={item} />
					</li>
				))}
			</ul>
			<div className={css.btn_wrapper}>
				<AddNewAddressModal />
			</div>
		</>
	);
}

export default DeliveryList;
