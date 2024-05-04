import { setPhoneNumber } from "@/slices/phone_numer/phoneNumber";
import { AppDispatch } from "@/store";
import { PhoneInput } from "react-international-phone";
import { useDispatch } from "react-redux";

import Label from "@/components/shared/label";
import authCss from "../auth.module.css";
import { useTranslations } from "next-intl";

interface Props {
	setValue: React.Dispatch<React.SetStateAction<string>>;
	value?:string
}

function PhoneNumberInput({ setValue,value }: Props) {
	const t = useTranslations("auth.signUp");

	const dispatch = useDispatch<AppDispatch>();

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
					dispatch(setPhoneNumber(value));
					setValue(value);
				}}
			/>
		</div>
	);
}

export default PhoneNumberInput;
