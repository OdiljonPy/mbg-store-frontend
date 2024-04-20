import Label from "@/components/shared/label";
import TextArea from "@/components/shared/text-area";
import { Controller, UseFormReturn } from "react-hook-form";
import { NewStatementForm } from "../../new-statement";

import ErrorMessage from "@/components/shared/error-message";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import css from "./index.module.css";

interface Props {
	form: UseFormReturn<NewStatementForm>;
}

function DescriptionField({ form }: Props) {
	const t = useTranslations("support.first_step");

	const desc = form.watch("description") || "";

	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const textareaValue = form.watch("description");

	useEffect(() => {
		if (!textareaRef.current) return;

		textareaRef.current.style.height = "inherit";

		if (textareaRef.current.scrollHeight < 150) {
			textareaRef.current.style.height = `${
				Math.max(textareaRef.current.scrollHeight, 50) + 2
			}px`;
		} else {
			textareaRef.current.style.height = "150px";
		}
	}, [textareaValue]);

	return (
		<div>
			<div className={css.desc_label}>
				<Label required>{t("description")}</Label>
				<div className={css.counter}>{desc.length}/400</div>
			</div>
			<Controller
				control={form.control}
				name='description'
				rules={{
					required: {
						value: true,
						message: t("this_is_required"),
					},
				}}
				render={({ field: { onChange, value } }) => (
					<TextArea
						ref={textareaRef}
						value={value}
						onChange={onChange}
						resize='vertical'
						className={css.textarea}
						maxLength={400}
						placeholder={t("your_message")}
					/>
				)}
			/>
			<ErrorMessage>
				{form.formState.errors.description?.message}
			</ErrorMessage>
		</div>
	);
}

export default DescriptionField;
