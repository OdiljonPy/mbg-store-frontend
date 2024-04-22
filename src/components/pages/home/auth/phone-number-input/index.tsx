import { clearLoginError } from "@/slices/auth/login";
import { setPhoneNumber } from "@/slices/phone_numer/phoneNumber";
import { AppDispatch } from "@/store";
import { PhoneInput } from "react-international-phone";
import { useDispatch } from "react-redux";

import Label from "@/components/shared/label";
import { clearSignUpError } from "@/slices/auth/signup";
import authCss from "../auth.module.css";
import { useTranslations } from "next-intl";

interface Props {
	setValue: React.Dispatch<React.SetStateAction<string>>;
}

function PhoneNumberInput({ setValue }: Props) {
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
				onChange={(value) => {
					dispatch(setPhoneNumber(value));
					setValue(value);
				}}
			/>
		</div>
	);
}

export default PhoneNumberInput;
