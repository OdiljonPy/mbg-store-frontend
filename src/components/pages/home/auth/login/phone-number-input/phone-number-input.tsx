import { clearLoginError } from "@/slices/auth/login";
import { setPhoneNumber } from "@/slices/phone_numer/phoneNumber";
import { AppDispatch } from "@/store";
import { PhoneInput } from "react-international-phone";
import { useDispatch } from "react-redux";
import authCss from "../../auth.module.css";

interface Props {
	setValue: React.Dispatch<React.SetStateAction<string>>;
}

function PhoneNumberInput({ setValue }: Props) {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<div className={authCss.input_wrapper}>
			<label className={authCss.label}>Номер телефона</label>
			<PhoneInput
				hideDropdown={true}
				inputClassName={authCss.input}
				defaultCountry='uz'
				inputProps={{
					placeholder: "+998",
				}}
				placeholder={"Номер телефона"}
				onChange={(value) => {
					dispatch(setPhoneNumber(value));
					dispatch(clearLoginError());
					setValue(value);
				}}
			/>
		</div>
	);
}

export default PhoneNumberInput;
