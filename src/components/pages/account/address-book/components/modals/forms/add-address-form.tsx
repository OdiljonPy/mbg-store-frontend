import Button from "@/components/shared/button";
import { useForm } from "react-hook-form";

import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { useState } from "react";
import AddressFields from "./address-fields";
import { IAddressForm } from "./address-form.interface";
import AddressMap from "./address-map/address-map";
import css from "./form.module.css";

function AddAddress() {
	const form = useForm<IAddressForm>({
		defaultValues: {
			address_name: "",
			address: "",
			latitude: "41.373433",
			longitude: "69.268657",
			main_address: false,
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
				<Button full type='submit' disabled={!form.formState.isValid}>
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

export default AddAddress;
