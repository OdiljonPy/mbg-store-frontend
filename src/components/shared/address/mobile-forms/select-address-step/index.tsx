import ErrorMessage from "@/components/shared/error-message";
import Input from "@/components/shared/input";
import Label from "@/components/shared/label";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";
import AddressDetect from "../../address-detect/address-detect";
import AddressMap from "../../address-map/address-map";
import { IAddressForm } from "../../types";
import css from "./select-address-step.module.css";

interface Props {
	form: UseFormReturn<IAddressForm>;
	mapConstructor?: YMapsApi;
	setMapConstructor: Dispatch<SetStateAction<YMapsApi | undefined>>;
}

function SelectAddressStep({ form, mapConstructor, setMapConstructor }: Props) {
	return (
		<div className={css.body}>
			<div className={css.body_top}>
				<div className={css.label_wrapper}>
					<Label required>Адрес</Label>
					<AddressDetect
						form={form}
						mapConstructor={mapConstructor}
					/>
				</div>
				<Input
					placeholder='Город, улица, дом'
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
			<div className={css.body_bottom}>
				<AddressMap
					form={form}
					mapConstructor={mapConstructor}
					setMapConstructor={setMapConstructor}
				/>
			</div>
		</div>
	);
}

export default SelectAddressStep;
