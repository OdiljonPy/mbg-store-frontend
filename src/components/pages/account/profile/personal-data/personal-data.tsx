import CustomRadio from "@/components/shared/custom-radio/custom-radio";
import { ConfigProvider, DatePicker } from "antd";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import css from "./personal-data.module.css";

interface UpdateDataForm {
	full_name: string;
	gender: "M" | "F";
	birth_date: string | undefined;
}

function PersonalData() {
	const t = useTranslations();

	const [edit, setEdit] = useState<boolean>(false);

	const form = useForm<UpdateDataForm>();

	const onSubmit = (data: UpdateDataForm) => {
		console.log(data);
		setEdit(false);
	};

	return (
		<ConfigProvider
			theme={{
				token: {
					// Seed Token
					colorPrimary: "#39B969",
					borderRadius: 16,
					colorTextPlaceholder: "#75758b",
					fontSize: 16,
				},
			}}
		>
			<div className={css.card}>
				<div className={css.header}>
					<h3>{t("profile.personal_data.title")}</h3>
					{!edit && (
						<button
							onClick={() => setEdit(true)}
							className={css.edit_btn}
						>
							<svg
								width='19'
								height='19'
								viewBox='0 0 19 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M18.3103 4.87866L14.1216 0.688973C13.9823 0.549649 13.8169 0.439129 13.6349 0.363725C13.4529 0.288322 13.2578 0.249512 13.0608 0.249512C12.8638 0.249512 12.6687 0.288322 12.4867 0.363725C12.3047 0.439129 12.1393 0.549649 12 0.688973L0.439695 12.2502C0.299801 12.389 0.188889 12.5542 0.113407 12.7362C0.0379245 12.9183 -0.000621974 13.1135 7.58902e-06 13.3105V17.5002C7.58902e-06 17.898 0.158043 18.2796 0.439347 18.5609C0.720652 18.8422 1.10218 19.0002 1.50001 19.0002H5.6897C5.88675 19.0009 6.08197 18.9623 6.26399 18.8868C6.44602 18.8113 6.61122 18.7004 6.75001 18.5605L18.3103 7.00022C18.4496 6.86093 18.5602 6.69556 18.6356 6.51355C18.711 6.33154 18.7498 6.13645 18.7498 5.93944C18.7498 5.74243 18.711 5.54735 18.6356 5.36534C18.5602 5.18333 18.4496 5.01795 18.3103 4.87866ZM1.81032 13.0002L9.75001 5.06054L11.3147 6.62522L3.37501 14.564L1.81032 13.0002ZM1.50001 14.8105L4.1897 17.5002H1.50001V14.8105ZM6.00001 17.1899L4.43532 15.6252L12.375 7.68554L13.9397 9.25022L6.00001 17.1899ZM15 8.18991L10.8103 4.00022L13.0603 1.75022L17.25 5.93897L15 8.18991Z'
									fill='#999999'
								/>
							</svg>
						</button>
					)}
				</div>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className={css.body}>
						<div>
							<label
								className={css.label}
								htmlFor='full_name'
							>
								{t("profile.personal_data.name_and_surname")}
							</label>
							<input
								{...form.register("full_name", {
									required: false,
								})}
								id='full_name'
								className={css.input}
								disabled={!edit}
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
								<DatePicker
									style={{
										borderRadius: "16px",
										border: "2px solid var(--input-gray)",
										marginTop: "4px",
										fontSize: "16px",
										boxShadow: "none",
									}}
									suffixIcon
									className={[css.input, css.inputName].join(
										" "
									)}
									id='birthday'
									disabled={!edit}
									placeholder='дд.мм.гггг'
									onChange={(date, dateString) => {
										form.setValue("birth_date", dateString);
									}}
								/>
							</div>
							<div className={css.gender}>
								<div>
									<CustomRadio
										radio={{
											title: t(
												"profile.personal_data.male"
											),
											key: "male",
											name: "gender",
										}}
										options={{
											disabled: !edit,
											checked:
												form.watch("gender") === "M",
											onChange: () => {
												form.setValue("gender", "M");
											},
										}}
									/>
								</div>
								<div>
									<CustomRadio
										radio={{
											title: t(
												"profile.personal_data.female"
											),
											key: "female",
											name: "gender",
										}}
										options={{
											disabled: !edit,
											checked:
												form.watch("gender") === "F",
											onChange: () => {
												form.setValue("gender", "F");
											},
										}}
									/>
								</div>
							</div>
						</div>
					</div>
					{edit && (
						<div className={css.footer}>
							<button className={css.save_btn}>
								{t("profile.save")}
							</button>
						</div>
					)}
				</form>
			</div>
		</ConfigProvider>
	);
}

export default PersonalData;
