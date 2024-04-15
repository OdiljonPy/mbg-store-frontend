import Checkbox from "@/components/shared/checkbox";
import Input from "@/components/shared/input";
import Label from "@/components/shared/label";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { UseFormReturn } from "react-hook-form";
import { IAddressForm } from "../../types";

import ErrorMessage from "@/components/shared/error-message";
import { useTranslations } from "next-intl";
import AddressDetect from "../../address-detect/address-detect";
import css from "./address-fields.module.css";

interface Props {
	form: UseFormReturn<IAddressForm>;
	mapConstructor?: YMapsApi;
}

function AddressFields({ form, mapConstructor }: Props) {
	const t = useTranslations("address");
	return (
		<>
			<div>
				<Label required>{t("name")}</Label>
				<Input
					placeholder={t("enter_name")}
					{...form.register("address_name", {
						required: {
							value: true,
							message: t("required"),
						},
					})}
				/>
				<ErrorMessage>
					{form.formState.errors.address_name?.message}
				</ErrorMessage>
			</div>
			<div>
				<div className={css.form_row}>
					<Label required>{t("title")}</Label>
					<AddressDetect
						form={form}
						mapConstructor={mapConstructor}
					/>
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
				<ErrorMessage>
					{form.formState.errors.address?.message}
				</ErrorMessage>
			</div>
			<div className={css.form_row}>
				<div>
					<Label>{t("entrance")}</Label>
					<Input
						type='number'
						placeholder={t("entrance")}
						{...form.register("entrance")}
					/>
				</div>
				<div>
					<Label>{t("floor")}</Label>
					<Input
						type='number'
						placeholder={t("floor")}
						{...form.register("floor")}
					/>
				</div>
				<div>
					<Label>{t("apartment")}</Label>
					<Input
						type='number'
						placeholder={t("apartment")}
						{...form.register("apartment")}
					/>
				</div>
			</div>
			<div className={css.checkbox_wrapper}>
				<Checkbox
					id='main_address-1'
					{...form.register("main_address")}
				/>
				<Label htmlFor='main_address-1'>{t("make_address")}</Label>
			</div>
		</>
	);
}

export default AddressFields;
