import ErrorMessage from "@/components/shared/error-message";
import Input from "@/components/shared/input";
import Label from "@/components/shared/label";
import { useTranslations } from "next-intl";
import AddressDetect from "../../../address-detect/address-detect";

import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { UseFormReturn } from "react-hook-form";
import { IAddressForm, ILocationForm } from "../../../types";
import css from "./address-field.module.css";

interface Props {
	form: UseFormReturn<IAddressForm>;
	mapConstructor?: YMapsApi;
}

function AddressField({ form, mapConstructor }: Props) {
	const t = useTranslations("address");

	return (
		<div>
			<div className={css.label_wrapper}>
				<Label required>{t("title")}</Label>
				<AddressDetect form={form} mapConstructor={mapConstructor} />
			</div>
			<Input
				placeholder={t("placeholder")}
				{...form.register("address", {
					required: {
						value: true,
						message: t("required"),
					},
				})}
			/>
			<ErrorMessage>{form.formState.errors.address?.message}</ErrorMessage>
		</div>
	);
}

export default AddressField;
