import CustomRadio from "@/components/shared/custom-radio/custom-radio";
import { useTranslations } from "next-intl";
import css from "./personal-data.module.css";

function PersonalData() {
	const t = useTranslations();
	return (
		<div className={css.card}>
			<div className={css.header}>
				<h3>{t("profile.personal_data.title")}</h3>
			</div>
			<div className={css.body}>
				<div>
					<label
						className={css.label}
						htmlFor='name-last-name'
					>
						{t("profile.personal_data.name_and_surname")}
					</label>
					<input
						id='name-last-name'
						className={css.input}
						type='text'
						placeholder={t(
							"profile.personal_data.name_and_surname"
						)}
					/>
				</div>
				<div className={css.extraData}>
					<div>
						<label
							className={css.label}
							htmlFor='birthday'
						>
							{t("profile.personal_data.birthday")}
						</label>
						<input
							id='birthday'
							className={[css.input, css.inputName].join(" ")}
							type='text'
							placeholder='дд.мм.гггг'
						/>
					</div>
					<div className={css.gender}>
						<div className={css.male}>
							<CustomRadio
								radio={{
									title: t("profile.personal_data.male"),
									key: "male",
									name: "gender",
								}}
								options={{
									disabled: false,
									checked: false,
									onChange: () => {},
								}}
							/>
						</div>
						<div className={css.male}>
							<CustomRadio
								radio={{
									title: t("profile.personal_data.female"),
									key: "female",
									name: "gender",
								}}
								options={{
									disabled: false,
									checked: true,
									onChange: () => {},
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={css.footer}>
				<button className={css.btn}>{t("profile.save")}</button>
			</div>
		</div>
	);
}

export default PersonalData;
