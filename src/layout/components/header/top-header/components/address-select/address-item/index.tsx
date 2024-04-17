import CustomRadio from "@/components/shared/custom-radio/custom-radio";
import { IAddress } from "@/data-types/address/address";
import { toggleDefaultAddress } from "@/slices/address/addressSlice";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";

interface Props {
	address_item: IAddress;
}
function AddressItem({ address_item }: Props) {
	const dispatch = useDispatch<AppDispatch>();

	const onChangeHandler = () => {
		dispatch(toggleDefaultAddress(address_item.title));
	};

	return (
		<div>
			<CustomRadio
				radio={{
					key: String(address_item.latitude + address_item.longitude),
					name: "address",
					title: address_item.title,
				}}
				options={{
					checked: address_item.is_default,
					disabled: false,
					onChange: onChangeHandler,
				}}
			/>
		</div>
	);
}

export default AddressItem;
