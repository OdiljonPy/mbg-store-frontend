import Button from "@/components/shared/button";
import { useForm } from "react-hook-form";

import { IShipping } from "@/data-types/shipping";
import {
	fetchShippingList,
	patchShipping,
} from "@/slices/shipping/shippingSlice";
import { AppDispatch, RootState } from "@/store";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { useTranslations } from "next-intl";
import { MutableRefObject, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressMap from "../address-map/address-map";
import { getAddressByCoordinates } from "../helpers";
import { IAddressForm } from "../types";
import Fields from "./fields";
import css from "./form.module.css";

interface Props {
	defaultValues: IShipping;
	onClose: () => void;
}

function EditAddressForm({ defaultValues, onClose }: Props) {
	const t = useTranslations("address");

	const form = useForm<IAddressForm>({
		defaultValues: {
			address_name: defaultValues.address_name,
			address: defaultValues.address,
			apartment: String(defaultValues.apartment),
			entrance: String(defaultValues.entrance),
			floor: String(defaultValues.floor),
			latitude: Number(defaultValues.latitude),
			longitude: Number(defaultValues.longitude),
			main_address: defaultValues.main_address,
		},
		mode: "onChange",
	});

	const mapRef: MutableRefObject<ymaps.Map | undefined> = useRef();

	const [mapConstructor, setMapConstructor] = useState<YMapsApi>();

	const { patchLoading } = useSelector(
		(state: RootState) => state.shippingList
	);
	const dispatch = useDispatch<AppDispatch>();

	const onSubmit = async (data: IAddressForm) => {
		const { apartment, entrance, floor, latitude, longitude, ...rest } =
			data;

		try {
			const address = await getAddressByCoordinates(
				[latitude, longitude],
				mapConstructor
			);

			await dispatch(
				patchShipping({
					body: {
						apartment: apartment ? Number(apartment) : undefined,
						entrance: entrance ? Number(entrance) : undefined,
						floor: floor ? Number(floor) : undefined,
						latitude: String(latitude),
						longitude: String(longitude),
						...rest,
						address,
					},
					shippingId: defaultValues.id,
				})
			);
			await dispatch(fetchShippingList());
		} catch (e) {
			console.error(e);
		} finally {
			onClose();
		}
	};

	return (
		<form className={css.form} onSubmit={form.handleSubmit(onSubmit)}>
			<div className={css.form_left}>
				<h2 className={css.title}>{t("add_delivery")}</h2>
				<Fields
					mapRef={mapRef}
					form={form}
					mapConstructor={mapConstructor}
				/>
				<div className={css.footer}>
					<Button variant='secondary' onClick={onClose} type='button'>
						{t("cancel")}
					</Button>
					<Button
						onClick={form.handleSubmit(onSubmit)}
						type={"button"}
						full
						disabled={!form.formState.isValid}
						loading={patchLoading}
					>
						{t("change")}
					</Button>
				</div>
			</div>
			<div className={css.form_right}>
				<AddressMap
					mapRef={mapRef}
					form={form}
					mapConstructor={mapConstructor}
					setMapConstructor={setMapConstructor}
				/>
			</div>
		</form>
	);
}

export default EditAddressForm;
