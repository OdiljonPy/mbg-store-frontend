import {
	BoolFields,
	CheckboxFields,
} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import { ICustomCheckbox } from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import { useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";
import css from "./custom-checkbox.module.css";

interface props {
	name: CheckboxFields;
	boolName?: BoolFields;
	item: ICustomCheckbox;
	hasCount?: boolean;
	onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox = ({
	item,
	name,
	onChangeHandler,
	hasCount = true,
}: props) => {
	const { id, title, count } = item;

	const searchParams = useSearchParams();
	const value = searchParams.get(name);

	return (
		<label
			className={`${css.item} ${
				value && value?.includes(id.toString()) ? css.active : ""
			}`}
		>
			<input
				className={css.input}
				value={id}
				name={name}
				onChange={onChangeHandler}
				type={"checkbox"}
			/>
			<span className={css.title}>{title}</span>
			{hasCount && <span className={css.count}>{count}</span>}
		</label>
	);
};

export default CustomCheckbox;
