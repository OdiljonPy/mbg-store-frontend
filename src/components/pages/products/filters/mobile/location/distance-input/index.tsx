import { useFormContext } from "react-hook-form";
import { useTranslations } from "use-intl";
import { IFilters } from "../../mobile-filters/data-types";
import css from "./index.module.css";

function DistanceInput() {
	const { watch, setValue } = useFormContext<IFilters>();
	const t = useTranslations();
	const location = watch().location;
	const distance = watch().distance;

	return (
		<div className={css.wrapper}>
			<p>{t("location.distance")}</p>
			<div className={css.input}>
				<p className={css.text}>{t("from").toLowerCase()}</p>
				<input
					disabled={!location}
					value={distance || ""}
					className={css.value}
					onChange={(e) =>
						setValue("distance", Number(e.target.value))
					}
					type='number'
				/>
			</div>
		</div>
	);
}

export default DistanceInput;
