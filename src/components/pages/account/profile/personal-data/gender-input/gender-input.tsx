import CustomRadio from "@/components/shared/custom-radio/custom-radio";
import React from "react";
import css from "./gender-input.module.css";
import { useTranslations } from "use-intl";
import { EnumGender } from "@/data-types/auth/user";

interface Props {
	edit: boolean;
	gender: EnumGender | undefined;
	setGender: React.Dispatch<React.SetStateAction<EnumGender | undefined>>;
}

function GenderInput({ edit, gender, setGender }: Props) {
	const t = useTranslations();

	return (
		<div className={css.gender}>
			<div>
				<CustomRadio
					radio={{
						title: t("profile.personal_data.male"),
						key: "M",
						name: "gender",
					}}
					options={{
						disabled: !edit,
						checked: gender === EnumGender.M,
						onChange: () => {
							setGender(EnumGender.M);
						},
					}}
				/>
			</div>
			<div>
				<CustomRadio
					radio={{
						title: t("profile.personal_data.female"),
						key: "F",
						name: "gender",
					}}
					options={{
						disabled: !edit,
						checked: gender === EnumGender.F,
						onChange: () => {
							setGender(EnumGender.F);
						},
					}}
				/>
			</div>
		</div>
	);
}

export default GenderInput;
