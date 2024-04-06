import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { IAddressForm } from "../types";
import css from "./address-detect.module.css";

interface Props {
	form: UseFormReturn<IAddressForm>;
	mapConstructor?: YMapsApi;
}

const AddressDetect = ({ mapConstructor, form }: Props) => {
	const t = useTranslations();

	const onDetectLocation = () => {
		mapConstructor?.geolocation
			.get({
				provider: "browser",
				mapStateAutoApply: true,
			})
			.then((res: any) => {
				const [x, y] = res.geoObjects.position;
				form.setValue("latitude", x);
				form.setValue("longitude", y);
			});
	};

	return (
		<button
			onClick={onDetectLocation}
			type='button'
			className={css.detectLocale}
		>
			<svg
				className={css.icon}
				width='13'
				height='14'
				viewBox='0 0 13 14'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M-1.62125e-05 5.59874C0.00149822 5.81002 0.0709076 6.01521 0.197967 6.18403C0.325026 6.35284 0.502999 6.47632 0.705608 6.53624L5.49061 8.00874L6.96311 12.7937C7.02312 12.9963 7.14662 13.1742 7.31542 13.3013C7.48421 13.4283 7.68936 13.4978 7.90061 13.4994H7.91936C8.12652 13.5013 8.32902 13.4379 8.49811 13.3182C8.66719 13.1985 8.79424 13.0285 8.86123 12.8325L12.9375 1.83812C12.9388 1.83488 12.9399 1.83153 12.9406 1.82812C13.0015 1.65114 13.0116 1.46061 12.9696 1.2782C12.9276 1.0958 12.8353 0.928843 12.7031 0.796327C12.5709 0.663811 12.4041 0.571055 12.2218 0.528612C12.0395 0.486169 11.849 0.495742 11.6719 0.556242L11.6619 0.559367L0.666859 4.63812C0.467774 4.70617 0.295669 4.8361 0.175688 5.00893C0.0557079 5.18176 -0.00585842 5.38843 -1.62125e-05 5.59874Z'
					fill='#39B969'
				/>
			</svg>
			<span className={`${css.text}`}>{t("detect")}</span>
		</button>
	);
};

export default AddressDetect;
