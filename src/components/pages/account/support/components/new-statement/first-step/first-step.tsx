import Button from "@/components/shared/button";
import ErrorMessage from "@/components/shared/error-message";
import Input from "@/components/shared/input";
import Label from "@/components/shared/label";
import { useTranslations } from "next-intl";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { NewStatementForm } from "../new-statement";
import DescriptionField from "./description-field";
import css from "./first-step.module.css";
import StatementTypeSelect from "./statement-type-select/statement-type-select";

interface Props {
	form: UseFormReturn<NewStatementForm>;
	setStep: React.Dispatch<React.SetStateAction<number>>;
}

function FirstStep({ form, setStep }: Props) {
	const t = useTranslations("support.first_step");

	const isTypeSelected = !!form.watch("topic");

	return (
		<>
			<header className={css.header}>
				<h2>
					{t("title")}{" "}
					<span className={css.steps}>
						<span className={css.current_step}>1</span>
						<span>/</span>
						<span>2</span>
					</span>
				</h2>
			</header>
			<div className={css.body}>
				<div>
					<Label required>{t("email")}</Label>
					<Input
						placeholder={"example@gmail.com"}
						{...form.register("email", {
							required: {
								value: true,
								message: t("this_is_required"),
							},
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: t("invalid_email"),
							},
						})}
					/>
					<ErrorMessage>
						{form.formState.errors.email?.message}
					</ErrorMessage>
				</div>
				<div>
					<Label required>{t("topic")}</Label>
					<StatementTypeSelect form={form} />
					<ErrorMessage>
						{form.formState.errors.topic?.message}
					</ErrorMessage>
				</div>
				<DescriptionField form={form} />
			</div>
			<footer className={css.footer}>
				<Button
					type='button'
					variant='primary'
					full
					disabled={!form.formState.isValid || !isTypeSelected}
					onClick={() => setStep(1)}
				>
					{t("next")}
				</Button>
			</footer>
		</>
	);
}

export default FirstStep;
