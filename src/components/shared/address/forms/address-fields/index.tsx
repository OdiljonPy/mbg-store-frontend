import Checkbox from "@/components/shared/checkbox";
import Input from "@/components/shared/input";
import Label from "@/components/shared/label";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { UseFormReturn } from "react-hook-form";
import AddressDetect from "../address-detect/address-detect";
import { IAddressForm } from "../address-form.interface";

import ErrorMessage from "@/components/shared/error-message";
import css from "./address-fields.module.css";

interface Props {
	form: UseFormReturn<IAddressForm>;
	mapConstructor?: YMapsApi;
}

function AddressFields({ form, mapConstructor }: Props) {
	return (
		<>
			<div>
				<Label required>Название</Label>
				<Input
					placeholder='Введите название'
					{...form.register("address_name", {
						required: {
							value: true,
							message: "Это поле обязательно",
						},
					})}
				/>
				<ErrorMessage>
					{form.formState.errors.address_name?.message}
				</ErrorMessage>
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
					{...form.register("address", {
						required: {
							value: true,
							message: "Это поле обязательно",
						},
					})}
				/>
				<ErrorMessage>
					{form.formState.errors.address?.message}
				</ErrorMessage>
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
		</>
	);
}

export default AddressFields;
