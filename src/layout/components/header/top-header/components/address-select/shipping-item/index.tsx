import CustomRadio from "@/components/shared/custom-radio/custom-radio";
import { IShipping } from "@/data-types/shipping";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";

import { changeDefaultAddress } from "@/slices/address/addressSlice";
import Badge from "./badge/badge";

import { IAddress } from "@/data-types/address/address";
import css from "./shipping-item.module.css";

interface Props {
	shipping_item: IShipping;
	main_address: IAddress;
}
function ShippingItem({ main_address, shipping_item }: Props) {
	const dispatch = useDispatch<AppDispatch>();

	const onChangeHandler = () => {
		dispatch(
			changeDefaultAddress({
				id: shipping_item.id,
				address: shipping_item.address,
				latitude: shipping_item.latitude,
				longitude: shipping_item.longitude,
			})
		);
	};

	return (
		<div className={css.wrapper}>
			<CustomRadio
				radio={{
					key: String(
						shipping_item.latitude + shipping_item.longitude
					),
					name: "address",
					title: "",
				}}
				options={{
					checked: shipping_item.id === main_address.id,
					disabled: false,
					onChange: onChangeHandler,
				}}
			>
				<div className={css.label}>
					<div className={css.title_wrapper}>
						<h4 className={css.title}>
							{shipping_item.address_name}
						</h4>
						{shipping_item.main_address && (
							<Badge className={css.badge}>Основной</Badge>
						)}
					</div>
					<p className={css.subtitle}>{shipping_item.address}</p>
				</div>
			</CustomRadio>
		</div>
	);
}

export default ShippingItem;
