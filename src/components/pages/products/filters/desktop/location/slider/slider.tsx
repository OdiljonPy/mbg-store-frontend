import { ConfigProvider, Slider } from "antd";
import { useSearchParams } from "next/navigation";

interface props {
	distanceRange: number;
	onChange: (value: number) => void;
	onChangeComplete: (value: number) => void;
}

const DistanceSlider = ({
	onChangeComplete,
	onChange,
	distanceRange,
}: props) => {
	const searchParams = useSearchParams();
	const locationQuery = searchParams.get("location");
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
				disabled={!locationQuery}
				min={1}
				max={20}
				defaultValue={distanceRange}
				tooltip={{ open: false }}
				value={distanceRange}
				onChange={onChange}
				onChangeComplete={onChangeComplete}
			/>
		</ConfigProvider>
	);
};

export default DistanceSlider;
