import { useTranslations } from "next-intl";
import css from "./inputs.module.css";

interface props {
	priceRange: number[];
	onChange: (value: number[]) => void;
	onChangeComplete: (value: number[]) => void;
}

const Inputs = ({ priceRange, onChange, onChangeComplete }: props) => {
	const t = useTranslations();
	return (
		<div className={css.wrapper}>
			<div className={css.input}>
				<p className={css.text}>{t("from").toLowerCase()}</p>
				<input
					value={priceRange[0] || ""}
					className={css.value}
					onChange={(e) =>
						onChange([Number(e.target.value), priceRange[1]])
					}
					onBlur={(e) => {
						onChangeComplete([
							Number(e.target.value),
							priceRange[1],
						]);
					}}
					type='number'
				/>
			</div>
			<div className={css.input}>
				<p className={css.text}>{t("to").toLowerCase()}</p>
				<input
					value={priceRange[1] || ""}
					className={css.value}
					type='number'
					onChange={(e) =>
						onChange([priceRange[0], Number(e.target.value)])
					}
					onBlur={(e) => {
						onChangeComplete([
							priceRange[0],
							Number(e.target.value),
						]);
					}}
				/>
			</div>
		</div>
	);
};

export default Inputs;
