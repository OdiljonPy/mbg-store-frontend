import Button from "@/components/shared/button";
import { useForm } from "react-hook-form";

import {
	fetchShippingList,
	postShipping,
} from "@/slices/shipping/shippingSlice";
import { AppDispatch, RootState } from "@/store";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { MutableRefObject, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "use-intl";
import AddressMap from "../address-map/address-map";
import { getAddressByCoordinates } from "../helpers";
import { IAddressForm } from "../types";
import Fields from "./fields";
import css from "./form.module.css";

interface Props {
	onClose: () => void;
}

function AddAddressForm({ onClose }: Props) {
	const t = useTranslations("address");

	const form = useForm<IAddressForm>({
		defaultValues: {
			address_name: "",
			address: "",
			latitude: 41.373433,
			longitude: 69.268657,
			main_address: false,
		},
		mode: "onChange",
	});
	const mapRef: MutableRefObject<ymaps.Map | undefined> = useRef();

	const [mapConstructor, setMapConstructor] = useState<YMapsApi>();

	const { postLoading } = useSelector(
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
				postShipping({
					apartment: apartment ? Number(apartment) : undefined,
					entrance: entrance ? Number(entrance) : undefined,
					floor: floor ? Number(floor) : undefined,
					latitude: String(latitude),
					longitude: String(longitude),
					...rest,
					address: address,
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
				<Button
					onClick={form.handleSubmit(onSubmit)}
					type={"button"}
					full
					disabled={!form.formState.isValid}
					loading={postLoading}
				>
					{t("save")}
				</Button>
			</div>
			<div className={css.form_right}>
				<AddressMap
					form={form}
					mapConstructor={mapConstructor}
					setMapConstructor={setMapConstructor}
					mapRef={mapRef}
				/>
			</div>
		</form>
	);
}

export default AddAddressForm;
