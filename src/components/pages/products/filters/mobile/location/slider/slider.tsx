import { ConfigProvider, Slider } from "antd";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";
import { IFilters } from "../../mobile-filters/data-types";
const DistanceSlider = () => {
	const { watch, setValue } = useFormContext<IFilters>();
	const t = useTranslations();
	const location = watch().location;
	const distance = watch().distance;

	return (
		<ConfigProvider
			theme={{
				components: {
					Slider: {
						trackBg: "#60C787",
						trackHoverBg: "#60C787",
						handleColor: "#60C787",
						handleActiveColor: "#60C787",
						dotActiveBorderColor: "#60C787",
						colorPrimaryBorderHover: "#60C787",
						controlSize: 6,
						handleSize: 12,
						handleSizeHover: 14,
					},
				},
			}}
		>
			<Slider
				disabled={!location}
				min={1}
				max={20}
				defaultValue={distance}
				tooltip={{ open: false }}
				value={distance}
				onChange={(e) => setValue("distance", e)}
			/>
		</ConfigProvider>
	);
};

export default DistanceSlider;
