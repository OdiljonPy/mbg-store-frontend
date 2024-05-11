import Button from "@/components/shared/button";
import { useForm } from "react-hook-form";

import {
	fetchShippingList,
	postShipping,
} from "@/slices/shipping/shippingSlice";
import { AppDispatch, RootState } from "@/store";
import { cn } from "@/utils/cn";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { useTranslations } from "next-intl";
import { MutableRefObject, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddressByCoordinates } from "../helpers";
import { IAddressForm } from "../types";
import AddressDetailsStep from "./address-details-step";
import css from "./form.module.css";
import SelectAddressStep from "./select-address-step";

interface Props {
	onClose: () => void;
}

function AddAddressMobileForm({ onClose }: Props) {
	const t = useTranslations("address");
	const [step, setStep] = useState<number>(0);

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
					apartment: Number(apartment),
					entrance: Number(entrance),
					floor: Number(floor),
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
	const address = form.watch("address");

	const steps = [
		{
			title: t("add_delivery"),
			content: (
				<SelectAddressStep
					mapRef={mapRef}
					form={form}
					mapConstructor={mapConstructor}
					setMapConstructor={setMapConstructor}
				/>
			),
			action: (
				<Button onClick={() => setStep(1)} full>
					{t("next")}
				</Button>
			),
		},
		{
			title: address,
			content: (
				<AddressDetailsStep
					mapRef={mapRef}
					form={form}
					mapConstructor={mapConstructor}
					setMapConstructor={setMapConstructor}
				/>
			),
			action: (
				<Button
					onClick={form.handleSubmit(onSubmit)}
					type={"button"}
					full
					disabled={!form.formState.isValid}
					loading={postLoading}
				>
					{t("save")}
				</Button>
			),
		},
	];

	return (
		<form className={css.form} onSubmit={form.handleSubmit(onSubmit)}>
			<header className={css.header}>
				{step === 1 && (
					<button
						className={css.button_back}
						onClick={() => setStep(0)}
						type='button'
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M15.5306 18.9698C15.6003 19.0395 15.6556 19.1222 15.6933 19.2132C15.731 19.3043 15.7504 19.4019 15.7504 19.5004C15.7504 19.599 15.731 19.6965 15.6933 19.7876C15.6556 19.8786 15.6003 19.9614 15.5306 20.031C15.4609 20.1007 15.3782 20.156 15.2872 20.1937C15.1961 20.2314 15.0985 20.2508 15 20.2508C14.9014 20.2508 14.8039 20.2314 14.7128 20.1937C14.6218 20.156 14.539 20.1007 14.4694 20.031L6.96935 12.531C6.89962 12.4614 6.8443 12.3787 6.80656 12.2876C6.76882 12.1966 6.74939 12.099 6.74939 12.0004C6.74939 11.9019 6.76882 11.8043 6.80656 11.7132C6.8443 11.6222 6.89962 11.5394 6.96935 11.4698L14.4694 3.96979C14.6101 3.82906 14.801 3.75 15 3.75C15.199 3.75 15.3899 3.82906 15.5306 3.96979C15.6713 4.11052 15.7504 4.30139 15.7504 4.50042C15.7504 4.69944 15.6713 4.89031 15.5306 5.03104L8.56029 12.0004L15.5306 18.9698Z'
								fill='#232323'
							/>
						</svg>
					</button>
				)}
				<h2 className={css.title}>{steps[step].title}</h2>
			</header>
			{steps[step].content}
			<div className={cn(css.action, address && css.action_visible)}>
				{steps[step].action}
			</div>
		</form>
	);
}

export default AddAddressMobileForm;
