import { Map, ZoomControl } from "@pbe/react-yandex-maps";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { UseFormReturn } from "react-hook-form";
import { IAddressForm } from "../types";
import css from "./address-map.module.css";

interface Props {
	form: UseFormReturn<IAddressForm>;
	mapConstructor?: YMapsApi;
	setMapConstructor: Dispatch<SetStateAction<YMapsApi | undefined>>;
	mapRef: MutableRefObject<ymaps.Map | undefined>;
}

function AddressMap({
	form,
	mapConstructor,
	setMapConstructor,
	mapRef,
}: Props) {
	const defaultState: ymaps.IMapState = {
		center: [
			Number(form.watch("latitude")),
			Number(form.watch("longitude")),
		],
		zoom: 12,
	};

	const handleBoundsChange = (e: any) => {
		const [x, y] = e.originalEvent.newCenter;
		mapConstructor?.geocode([x, y]).then(
			(res: any) => {
				const nearest = res.geoObjects.get(0);
				console.log(res.geoObjects.get(0));
				const address = nearest.properties.get("name");
				form.setValue("latitude", x);
				form.setValue("longitude", y);
				form.setValue("address", address);
			},
			(error) => {
				console.error("Error occurred during geocoding:", error);
			}
		);
	};

	return (
		<Map
			modules={["geocode", "geolocation", "SuggestView", "suggest"]}
			defaultState={defaultState}
			className={css.map}
			onLoad={setMapConstructor}
			onBoundsChange={handleBoundsChange}
			instanceRef={mapRef}
		>
			<svg
				className={css.pin}
				width='42'
				height='68'
				viewBox='0 0 42 68'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M21 0C32.598 0 42 9.40202 42 21C42 31.9234 33.6599 40.8989 23 41.906V64C23 65.1046 22.1046 66 21 66C19.8954 66 19 65.1046 19 64V41.906C8.34014 40.8989 0 31.9234 0 21C0 9.40202 9.40202 0 21 0Z'
					fill='#F65751'
				/>
				<path
					d='M28 21C28 17.134 24.866 14 21 14C17.134 14 14 17.134 14 21C14 24.866 17.134 28 21 28C24.866 28 28 24.866 28 21Z'
					fill='white'
				/>
				<path
					opacity='0.3'
					d='M21 68C23.7614 68 26 66.8807 26 65.5C26 64.1193 23.7614 63 21 63C18.2386 63 16 64.1193 16 65.5C16 66.8807 18.2386 68 21 68Z'
					fill='#F65751'
				/>
			</svg>
			<ZoomControl />
		</Map>
	);
}

export default AddressMap;
