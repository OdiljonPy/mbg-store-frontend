import Button from "@/components/shared/button";
import { useForm } from "react-hook-form";

import { IShipping } from "@/data-types/shipping";
import {
	fetchShippingList,
	patchShipping,
} from "@/slices/shipping/shippingSlice";
import { AppDispatch, RootState } from "@/store";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressMap from "../address-map/address-map";
import { IAddressForm } from "../types";
import AddressFields from "./address-fields";
import css from "./form.module.css";

interface Props {
	defaultValues: IShipping;
	onClose: () => void;
}

function EditAddressForm({ defaultValues, onClose }: Props) {
	const form = useForm<IAddressForm>({
		defaultValues: {
			address_name: defaultValues.address_name,
			address: defaultValues.address,
			apartment: String(defaultValues.apartment),
			entrance: String(defaultValues.entrance),
			floor: String(defaultValues.floor),
			latitude: Number(defaultValues.latitude),
			longitude: Number(defaultValues.longitude),
			main_address: defaultValues.main_address,
		},
	});
	const [mapConstructor, setMapConstructor] = useState<YMapsApi>();

	const { patchLoading } = useSelector(
		(state: RootState) => state.shippingList
	);
	const dispatch = useDispatch<AppDispatch>();

	const onSubmit = async (data: IAddressForm) => {
		const { apartment, entrance, floor, latitude, longitude, ...rest } =
			data;

		await dispatch(
			patchShipping({
				body: {
					apartment: Number(apartment),
					entrance: Number(entrance),
					floor: Number(floor),
					latitude: String(latitude),
					longitude: String(longitude),
					...rest,
				},
				shippingId: defaultValues.id,
			})
		);
		await dispatch(fetchShippingList());
		onClose();
	};

	return (
		<form className={css.form} onSubmit={form.handleSubmit(onSubmit)}>
			<div className={css.form_left}>
				<h2 className={css.title}>Адрес доставки</h2>
				<AddressFields form={form} mapConstructor={mapConstructor} />
				<div className={css.footer}>
					<Button variant='secondary' onClick={onClose} type='button'>
						Отмена
					</Button>
					<Button
						full
						disabled={!form.formState.isValid}
						loading={patchLoading}
					>
						Изменить
					</Button>
				</div>
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

export default EditAddressForm;
