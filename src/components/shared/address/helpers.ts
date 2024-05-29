import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";

export const getAddressByCoordinates = async (
	coordinates: [number, number],
	mapConstructor: YMapsApi | undefined
): Promise<string> => {
	const res: any = await mapConstructor?.geocode(coordinates);
	const nearest = res?.geoObjects.get(0);
	return nearest?.properties.get("name");
};
