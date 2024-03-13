import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import css from "../reset-password.module.css";

interface Props {
	onNext: () => void;
}

function DropPassword({ onNext }: Props) {
	const t = useTranslations();

	const [isValid, setIsValid] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState("");

	useEffect(() => {
		setIsValid(phoneNumber.length >= 13);
	}, [phoneNumber]);

	return (
		<>
			<div className={css.modal_header}>
				<h3 className={css.modal_title}>
					{t("profile.drop_password.modal_title")}
				</h3>
				<p className={css.modal_description}>
					{t("profile.drop_password.modal_description")}
				</p>
			</div>
			<div className={css.modal_body}>
				<PhoneInput
					hideDropdown={true}
					inputClassName={css.input}
					defaultCountry='uz'
					inputProps={{
						placeholder: "+998",
					}}
					value={phoneNumber}
					placeholder={t("profile.security.phone_number")}
					onChange={(value) => {
						setPhoneNumber(value);
					}}
				/>
			</div>
			<div className={css.modal_footer}>
				<button
					onClick={onNext}
					disabled={!isValid}
					className={[css.btn, css.btn_primary].join(" ")}
				>
					{t("profile.drop_password.get_code")}
				</button>
			</div>
		</>
	);
}

export default DropPassword;
