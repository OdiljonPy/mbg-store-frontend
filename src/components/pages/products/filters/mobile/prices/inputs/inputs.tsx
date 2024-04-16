import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";
import { IFilters } from "../../mobile-filters/data-types";
import css from "./inputs.module.css";

const Inputs = () => {
	const { watch, setValue } = useFormContext<IFilters>();
	const priceRange = watch("prices")
		?.split(",")
		?.map((item) => Number(item)) || [1000, 10000000];

	const t = useTranslations();

	const onChangeHandler = (values: number[]) => {
		setValue("prices", `${values[0]},${values[1]}`);
	};

	return (
		<div className={css.wrapper}>
			<div className={css.input}>
				<p className={css.text}>{t("from").toLowerCase()}</p>
				<input
					value={priceRange[0]}
					className={css.value}
					onChange={(e) =>
						onChangeHandler([Number(e.target.value), priceRange[1]])
					}
					type='number'
				/>
			</div>
			<div className={css.input}>
				<p className={css.text}>{t("to").toLowerCase()}</p>
				<input
					value={priceRange[1]}
					className={css.value}
					type='number'
					onChange={(e) =>
						onChangeHandler([priceRange[0], Number(e.target.value)])
					}
				/>
			</div>
		</div>
	);
};

export default Inputs;
