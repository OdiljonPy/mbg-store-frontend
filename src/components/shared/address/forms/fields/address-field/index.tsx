import ErrorMessage from "@/components/shared/error-message";
import Input from "@/components/shared/input";
import Label from "@/components/shared/label";
import { useTranslations } from "next-intl";
import AddressDetect from "../../../address-detect/address-detect";

import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { MutableRefObject, useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { IAddressForm } from "../../../types";
import css from "./address-field.module.css";

interface Props {
	form: UseFormReturn<IAddressForm>;
	mapConstructor?: YMapsApi;
	mapRef: MutableRefObject<ymaps.Map | undefined>;
}

function AddressField({ form, mapConstructor, mapRef }: Props) {
	const t = useTranslations("address");
	const [suggestions, setSuggestions] = useState<ymaps.ISuggestResult[]>();

	const address = form.watch().address;

	useEffect(() => {
		mapConstructor?.suggest(address).then((res) => {
			const suggestions = res.map((item) => item);
			setSuggestions(suggestions);
		});
	}, [address, mapConstructor]);

	const selectSuggestion = (s: ymaps.ISuggestResult) => {
		const { displayName } = s;
		if (mapConstructor) {
			mapConstructor.geocode(displayName).then((res: any) => {
				const firstGeoObject = res.geoObjects.get(0);
				const coordinates = firstGeoObject.geometry.getCoordinates();
				console.log(firstGeoObject);
				if (mapRef.current) {
					mapRef.current.panTo(coordinates, { flying: true });
				}
			});
		}
	};

	return (
		<div>
			<div className={css.label_wrapper}>
				<Label required>{t("title")}</Label>
				<AddressDetect
					mapRef={mapRef}
					form={form}
					mapConstructor={mapConstructor}
				/>
			</div>
			<div className={css.input_wrapper}>
				<Input
					className={css.input}
					placeholder={t("placeholder")}
					{...form.register("address", {
						required: {
							value: true,
							message: t("required"),
						},
					})}
					autoComplete='off'
				/>
				{!!suggestions?.length && (
					<ul className={css.dropdown}>
						{suggestions.map((s) => (
							<li
								onClick={() => selectSuggestion(s)}
								key={s.displayName}
								className={css.dropdown_item}
							>
								{s.displayName}
							</li>
						))}
					</ul>
				)}
			</div>
			<ErrorMessage>
				{form.formState.errors.address?.message}
			</ErrorMessage>
		</div>
	);
}

export default AddressField;
