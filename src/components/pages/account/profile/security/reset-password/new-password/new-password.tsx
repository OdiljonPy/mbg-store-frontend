import { useTranslations } from "next-intl";
import { useState } from "react";
import css from "../reset-password.module.css";
import PasswordInput from "./password-input/password-input";

interface Props {
	onPrev: () => void;
}

function NewPassword({ onPrev }: Props) {
	const t = useTranslations();
	const [isValid, setIsValid] = useState(false);

	return (
		<>
			<div className={css.modal_header}>
				<h3 className={css.modal_title}>
					{t("profile.new_password.modal_title")}
				</h3>
				<p className={css.modal_description}>
					{t("profile.new_password.modal_description")}
				</p>
			</div>
			<div className={css.modal_body}>
				<PasswordInput
					setIsValid={setIsValid}
					isValid={isValid}
				/>
			</div>
			<div className={css.modal_footer}>
				<button
					onClick={onPrev}
					disabled={!isValid}
					className={[css.btn, css.btn_primary].join(" ")}
				>
					{t("profile.new_password.change_password")}
				</button>
			</div>
		</>
	);
}

export default NewPassword;
