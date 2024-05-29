import Label from "@/components/shared/label";
import { ConfigProvider, DatePicker } from "antd";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import React from "react";
import css from "./birthday-input.module.css";

interface Props {
	edit: boolean;
	birthDate: string | undefined;
	setBirthDate: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function BirthdayInput({ edit, birthDate, setBirthDate }: Props) {
	const t = useTranslations();

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
				components: {
					DatePicker: {
						colorBgContainerDisabled: "transparent",
						colorTextDisabled: "rgb(84, 84, 84)",
					},
				},
			}}
		>
			<div>
				<Label htmlFor='birthday'>
					{t("profile.personal_data.birthday")}
				</Label>
				<DatePicker
					style={{
						borderRadius: "16px",
						border: "2px solid var(--input-gray)",
						marginTop: "4px",
						fontSize: "16px",
						boxShadow: "none",
					}}
					suffixIcon
					className={css.input}
					id='birthday'
					disabled={!edit}
					placeholder='дд.мм.гггг'
					value={birthDate ? dayjs(birthDate) : undefined}
					onChange={(date, dateString) => {
						setBirthDate(dateString);
					}}
				/>
			</div>
		</ConfigProvider>
	);
}

export default BirthdayInput;
