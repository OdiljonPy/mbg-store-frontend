import { PhoneInput } from "react-international-phone";

import ErrorMessage from "@/components/shared/error-message";
import Label from "@/components/shared/label";
import { useTranslations } from "next-intl";
import authCss from "../auth.module.css";

interface Props {
	setValue: React.Dispatch<React.SetStateAction<string>>;
	value: string;
}

function PhoneNumberInput({ setValue, value }: Props) {
	const t = useTranslations("auth.signUp");

	return (
		<div className={authCss.input_wrapper}>
			<Label>{t("phone_number")}</Label>
			<PhoneInput
				hideDropdown={true}
				inputClassName={authCss.input}
				defaultCountry='uz'
				inputProps={{
					placeholder: "+998",
				}}
				value={value}
				onChange={(value) => {
					setValue(value);
				}}
			/>
			{!value?.startsWith("+998") && (
				<ErrorMessage>{t("invalid_region")}</ErrorMessage>
			)}
		</div>
	);
}

export default PhoneNumberInput;
