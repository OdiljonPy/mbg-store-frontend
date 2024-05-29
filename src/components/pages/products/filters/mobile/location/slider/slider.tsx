import { ConfigProvider, Slider } from "antd";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const DistanceSlider = () => {
	const t = useTranslations();
	const { push, query } = useRouter();
	const searchParams = useSearchParams();
	const pathname: string = usePathname();
	const location = searchParams.get("location");
	const distance = searchParams.get("distance");

	const onChange = () => {
		push(
			{
				pathname,
				query: {
					...query,
					distance: distance,
					changeFilter:
						searchParams.get("changeFilter") === "true"
							? "false"
							: "true",
				},
			},
			undefined,
			{
				scroll: false,
			}
		);
	};

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
				defaultValue={Number(distance)}
				tooltip={{ open: false }}
				value={Number(distance)}
				onChange={onChange}
			/>
		</ConfigProvider>
	);
};

export default DistanceSlider;
