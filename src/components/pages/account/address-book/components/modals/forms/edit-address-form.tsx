import Button from "@/components/shared/button";
import { useForm } from "react-hook-form";

import { IShipping } from "@/data-types/shipping";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { useState } from "react";
import AddressFields from "./address-fields";
import { IAddressForm } from "./address-form.interface";
import AddressMap from "./address-map/address-map";
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
			apartment: defaultValues.apartment,
			entrance: defaultValues.entrance,
			floor: defaultValues.floor,
			latitude: defaultValues.latitude,
			longitude: defaultValues.longitude,
			main_address: defaultValues.main_address,
		},
	});
	const [mapConstructor, setMapConstructor] = useState<YMapsApi>();

	const onSubmit = (data: IAddressForm) => {
		console.log(data);
	};
	return (
		<form className={css.form} onSubmit={form.handleSubmit(onSubmit)}>
			<div className={css.form_left}>
				<h2 className={css.title}>Адрес доставки</h2>
				<AddressFields form={form} mapConstructor={mapConstructor} />
				<div className={css.footer}>
					<Button variant='secondary' onClick={onClose}>
						Отмена
					</Button>
					<Button
						full
						type='submit'
						disabled={!form.formState.isValid}
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
