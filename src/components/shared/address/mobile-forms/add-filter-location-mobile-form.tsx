import Button from "@/components/shared/button";
import { useForm } from "react-hook-form";

import { AppDispatch, RootState } from "@/store";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { MutableRefObject, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "use-intl";
import { IAddressForm } from "../types";

import { addFilterLocation } from "@/slices/filter_location/filterLocationSlice";
import { cn } from "@/utils/cn";
import css from "./form.module.css";
import SelectAddressStep from "./select-address-step";

interface Props {
	onClose: () => void;
}

function AddFilterLocationMobileForm({ onClose }: Props) {
	const t = useTranslations("address");

	const form = useForm<IAddressForm>({
		defaultValues: {
			address: "",
			latitude: 41.373433,
			longitude: 69.268657,
		},
		mode: "onChange",
	});

	const mapRef: MutableRefObject<ymaps.Map | undefined> = useRef();

	const [mapConstructor, setMapConstructor] = useState<YMapsApi>();

	const { postLoading } = useSelector(
		(state: RootState) => state.shippingList
	);
	const dispatch = useDispatch<AppDispatch>();

	const onSubmit = (data: IAddressForm) => {
		const { latitude, longitude, address } = data;
		dispatch(
			addFilterLocation({
				latitude,
				longitude,
				address,
			})
		);

		onClose();
	};

	const address = form.watch("address");

	return (
		<form className={css.form} onSubmit={form.handleSubmit(onSubmit)}>
			<header className={css.header}>
				<h2 className={css.title}>{t("typeAddress")}</h2>
			</header>
			<SelectAddressStep
				mapRef={mapRef}
				form={form}
				setMapConstructor={setMapConstructor}
				mapConstructor={mapConstructor}
			/>
			<div className={cn(css.action, address && css.action_visible)}>
				<Button className={css.btn} full loading={postLoading}>
					{t("save")}
				</Button>
			</div>
		</form>
	);
}

export default AddFilterLocationMobileForm;
