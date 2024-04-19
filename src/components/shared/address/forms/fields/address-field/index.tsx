import ErrorMessage from "@/components/shared/error-message";
import Input from "@/components/shared/input";
import Label from "@/components/shared/label";
import { useTranslations } from "next-intl";
import AddressDetect from "../../../address-detect/address-detect";

import { cn } from "@/utils/cn";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import {
	InputHTMLAttributes,
	MutableRefObject,
	useEffect,
	useState,
} from "react";
import { UseFormReturn } from "react-hook-form";
import { IAddressForm } from "../../../types";
import css from "./address-field.module.css";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "form"> {
	form: UseFormReturn<IAddressForm>;
	mapConstructor?: YMapsApi;
	mapRef: MutableRefObject<ymaps.Map | undefined>;
}

function AddressField({
	form,
	mapConstructor,
	mapRef,
	className,
	...rest
}: Props) {
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
					mapRef.current.setZoom(18);
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
					className={cn(css.input, className)}
					autoComplete='off'
					placeholder={t("placeholder")}
					{...form.register("address", {
						required: {
							value: true,
							message: t("required"),
						},
					})}
					{...rest}
				/>
				{!!suggestions?.length && (
					<ul className={css.dropdown}>
						{suggestions.map((s) => (
							<li
								onClick={() => selectSuggestion(s)}
								key={s.displayName}
								className={css.dropdown_item}
							>
								<svg
									className={css.icon}
									width='14'
									height='16'
									viewBox='0 0 14 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M7 0.125C5.35954 0.126861 3.78681 0.779354 2.62683 1.93933C1.46685 3.09931 0.814361 4.67204 0.8125 6.3125C0.8125 11.607 6.4375 15.6057 6.67727 15.773C6.77184 15.8393 6.88452 15.8748 7 15.8748C7.11548 15.8748 7.22816 15.8393 7.32273 15.773C7.5625 15.6057 13.1875 11.607 13.1875 6.3125C13.1856 4.67204 12.5331 3.09931 11.3732 1.93933C10.2132 0.779354 8.64046 0.126861 7 0.125ZM7 4.0625C7.44501 4.0625 7.88002 4.19446 8.25003 4.44169C8.62004 4.68893 8.90843 5.04033 9.07873 5.45146C9.24903 5.8626 9.29358 6.315 9.20677 6.75145C9.11995 7.18791 8.90566 7.58882 8.59099 7.90349C8.27632 8.21816 7.87541 8.43245 7.43895 8.51927C7.0025 8.60608 6.5501 8.56153 6.13896 8.39123C5.72783 8.22093 5.37643 7.93254 5.12919 7.56253C4.88196 7.19252 4.75 6.75751 4.75 6.3125C4.75 5.71576 4.98705 5.14347 5.40901 4.72151C5.83097 4.29955 6.40326 4.0625 7 4.0625Z'
										fill='#C2C2C2'
									/>
								</svg>
								<span>{s.displayName}</span>
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
