import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import { useForm } from "react-hook-form";

import Checkbox from "@/components/shared/checkbox";
import Label from "@/components/shared/label";
import { IShipping } from "@/data-types/shipping";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { useState } from "react";
import AddressDetect from "./address-detect/address-detect";
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
				<div>
					<Label required>Название</Label>
					<Input
						placeholder='Введите название'
						{...form.register("address_name")}
					/>
				</div>
				<div>
					<div className={css.form_row}>
						<Label required>Адрес</Label>
						<AddressDetect
							form={form}
							mapConstructor={mapConstructor}
						/>
					</div>
					<Input
						placeholder='Введите адрес'
						{...form.register("address")}
					/>
				</div>
				<div className={css.form_row}>
					<div>
						<Label>Подъезд</Label>
						<Input
							type='number'
							placeholder='Подъезд'
							{...form.register("entrance")}
						/>
					</div>
					<div>
						<Label>Этаж</Label>
						<Input
							type='number'
							placeholder='Этаж'
							{...form.register("floor")}
						/>
					</div>
					<div>
						<Label>Квартира</Label>
						<Input
							type='number'
							placeholder='Квартира'
							{...form.register("apartment")}
						/>
					</div>
				</div>
				<div className={css.make_main}>
					<Checkbox
						id='main_address'
						{...form.register("main_address")}
					/>
					<Label htmlFor='main_address'>Сделать адрес основным</Label>
				</div>
				<div className={css.form_row}>
					<Button variant='secondary' onClick={onClose}>
						Отмена
					</Button>
					<Button full type='submit'>
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
