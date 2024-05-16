import Button from "@/components/shared/button";
import { useForm } from "react-hook-form";

import { AppDispatch, RootState } from "@/store";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { MutableRefObject, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "use-intl";
import AddressMap from "../address-map/address-map";
import { IAddressForm } from "../types";
import AddressField from "./fields/address-field";

import { addAddress } from "@/slices/address/addressSlice";
import { useToasts } from "react-toast-notifications";
import { getAddressByCoordinates } from "../helpers";
import css from "./form.module.css";

interface Props {
	onClose: () => void;
}

function AddLocationForm({ onClose }: Props) {
	const t = useTranslations("address");
	const { addToast } = useToasts();

	const form = useForm<IAddressForm>({
		defaultValues: {
			address: "",
			latitude: 41.373433,
			longitude: 69.268657,
			main_address: true,
		},
		mode: "onChange",
	});

	const mapRef: MutableRefObject<ymaps.Map | undefined> = useRef();

	const { shippingList } = useSelector(
		(state: RootState) => state.shippingList
	);

	const [mapConstructor, setMapConstructor] = useState<YMapsApi>();

	const { postLoading } = useSelector(
		(state: RootState) => state.shippingList
	);
	const dispatch = useDispatch<AppDispatch>();

	const onSubmit = async (data: IAddressForm) => {
		const { latitude, longitude } = data;
		try {
			const address = await getAddressByCoordinates(
				[latitude, longitude],
				mapConstructor
			);
			dispatch(addAddress({ latitude, longitude, address }));
		} catch (e) {
			console.error(e);
		} finally {
			onClose();
		}
	};

	return (
		<form className={css.form} onSubmit={form.handleSubmit(onSubmit)}>
			<div className={css.form_left}>
				<h2 className={css.title}>{t("typeAddress")}</h2>
				<AddressField
					mapRef={mapRef}
					form={form}
					mapConstructor={mapConstructor}
				/>
				<div className={css.footer}>
					<Button
						className={css.btn}
						full
						loading={postLoading}
						disabled={!form.formState.isValid}
					>
						{t("save")}
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

export default AddLocationForm;
