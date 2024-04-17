import CustomRadio from "@/components/shared/custom-radio/custom-radio";
import { IShipping } from "@/data-types/shipping";
import {
	fetchShippingList,
	patchShipping,
} from "@/slices/shipping/shippingSlice";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";

import Badge from "./badge/badge";
import css from "./shipping-item.module.css";

interface Props {
	shipping_item: IShipping;
}
function ShippingItem({ shipping_item }: Props) {
	const dispatch = useDispatch<AppDispatch>();

	const onChangeHandler = async () => {
		await dispatch(
			patchShipping({
				shippingId: shipping_item.id,
				body: {
					...shipping_item,
					main_address: true,
				},
			})
		);
		dispatch(fetchShippingList());
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
					checked: shipping_item.main_address,
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
