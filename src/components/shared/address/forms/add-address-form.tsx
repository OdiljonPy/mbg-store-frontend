import Button from "@/components/shared/button";
import { useForm } from "react-hook-form";

import { postShipping } from "@/slices/shipping/shippingSlice";
import { AppDispatch, RootState } from "@/store";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressFields from "./address-fields";
import { IAddressForm } from "./address-form.interface";
import AddressMap from "./address-map/address-map";
import css from "./form.module.css";

interface Props {
	onClose: () => void;
}

function AddAddressForm({ onClose }: Props) {
	const form = useForm<IAddressForm>({
		defaultValues: {
			address_name: "",
			address: "",
			latitude: 41.373433,
			longitude: 69.268657,
			main_address: false,
		},
	});
	const [mapConstructor, setMapConstructor] = useState<YMapsApi>();

	const { postLoading } = useSelector((state: RootState) => state.shippingList);
	const dispatch = useDispatch<AppDispatch>();

	const onSubmit = (data: IAddressForm) => {
		const { apartment, entrance, floor, latitude, longitude, ...rest } =
			data;

		dispatch(
			postShipping({
				apartment: Number(apartment),
				entrance: Number(entrance),
				floor: Number(floor),
				latitude: String(latitude),
				longitude: String(longitude),
				...rest,
			})
		).then(() => onClose());
	};
	return (
		<form className={css.form} onSubmit={form.handleSubmit(onSubmit)}>
			<div className={css.form_left}>
				<h2 className={css.title}>Адрес доставки</h2>
				<AddressFields form={form} mapConstructor={mapConstructor} />
				<Button
					full
					disabled={!form.formState.isValid}
					loading={postLoading}
				>
					Сохранить
				</Button>
			</div>
			<div className={css.form_right}>
				<AddressMap
					form={form}
					mapConstructor={mapConstructor}
					setMapConstructor={setMapConstructor}
				/>
			</div>
		</form>
	);
}

export default AddAddressForm;