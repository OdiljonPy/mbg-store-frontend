import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";
import AddressMap from "../../address-map/address-map";
import AddressField from "../../forms/fields/address-field";
import { IAddressForm } from "../../types";
import css from "./select-address-step.module.css";

interface Props {
	form: UseFormReturn<IAddressForm>;
	mapConstructor?: YMapsApi;
	setMapConstructor: Dispatch<SetStateAction<YMapsApi | undefined>>;
	mapRef: MutableRefObject<ymaps.Map | undefined>;
}

function SelectAddressStep({
	form,
	mapConstructor,
	setMapConstructor,
	mapRef,
}: Props) {
	return (
		<div className={css.body}>
			<div className={css.body_top}>
				<AddressField
					form={form}
					mapRef={mapRef}
					mapConstructor={mapConstructor}
				/>
			</div>
			<div className={css.body_bottom}>
				<AddressMap
					mapRef={mapRef}
					form={form}
					mapConstructor={mapConstructor}
					setMapConstructor={setMapConstructor}
				/>
			</div>
		</div>
	);
}

export default SelectAddressStep;
