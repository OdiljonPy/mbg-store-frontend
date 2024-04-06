import Checkbox from "@/components/shared/checkbox";
import ErrorMessage from "@/components/shared/error-message";
import Input from "@/components/shared/input";
import Label from "@/components/shared/label";
import { UseFormReturn } from "react-hook-form";
import { IAddressForm } from "../../types";

import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { Dispatch, SetStateAction } from "react";
import AddressMap from "../../address-map/address-map";
import css from "./address-details-step.module.css";

interface Props {
	form: UseFormReturn<IAddressForm>;
	mapConstructor?: YMapsApi;
	setMapConstructor: Dispatch<SetStateAction<YMapsApi | undefined>>;
}

function AddressDetailsStep({
	form,
	mapConstructor,
	setMapConstructor,
}: Props) {
	return (
		<div className={css.body}>
			<div className={css.body_top}>
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
				<div className={css.checkbox_wrapper}>
					<Checkbox
						id='main_address'
						{...form.register("main_address")}
					/>
					<Label htmlFor='main_address'>Сделать адрес основным</Label>
				</div>
			</div>
			<div className={css.body_bottom}>
				<div className={css.map_disable}></div>
				<AddressMap
					form={form}
					mapConstructor={mapConstructor}
					setMapConstructor={setMapConstructor}
				/>
			</div>
		</div>
	);
}

export default AddressDetailsStep;
