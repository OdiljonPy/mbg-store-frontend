import CustomRadio from "@/components/shared/custom-radio/custom-radio";
import { IAddress } from "@/data-types/address/address";
import { changeDefaultAddress } from "@/slices/address/addressSlice";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";

import css from "./address-item.module.css";

interface Props {
	address_item: IAddress;
	main_address: string;
}
function AddressItem({ main_address, address_item }: Props) {
	const dispatch = useDispatch<AppDispatch>();

	const onChangeHandler = () => {
		dispatch(changeDefaultAddress(address_item));
		console.log(address_item.address);
	};

	return (
		<div className={css.wrapper}>
			<CustomRadio
				radio={{
					key: String(address_item.latitude + address_item.longitude),
					name: "address",
					title: "",
				}}
				options={{
					checked: address_item.address === main_address,
					disabled: false,
					onChange: onChangeHandler,
				}}
			>
				<div className={css.label}>
					<p>{address_item.address}</p>
				</div>
			</CustomRadio>
		</div>
	);
}

export default AddressItem;
