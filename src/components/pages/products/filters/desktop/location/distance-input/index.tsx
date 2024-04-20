import { useTranslations } from "use-intl";
import css from "./index.module.css";
import { useSearchParams } from "next/navigation";

interface Props {
	distance: number;
	onChange: (value: number) => void;
	onChangeComplete: (value: number) => void;
}

function DistanceInput({ distance, onChange, onChangeComplete }: Props) {
	const searchParams = useSearchParams();
	const locationQuery = searchParams.get("location");
	const t = useTranslations();

	return (
		<div className={css.wrapper}>
			<p>{t("location.distance")}</p>
			<div className={css.input}>
				<p className={css.text}>{t("from").toLowerCase()}</p>
				<input
					disabled={!locationQuery}
					value={distance || ""}
					className={css.value}
					onChange={(e) => onChange(Number(e.target.value))}
					onBlur={(e) => {
						onChangeComplete(Number(e.target.value));
					}}
					type='number'
				/>
			</div>
		</div>
	);
}

export default DistanceInput;
