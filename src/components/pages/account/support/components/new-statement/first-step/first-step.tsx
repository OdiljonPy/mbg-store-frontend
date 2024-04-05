import Button from "@/components/shared/button";
import ErrorMessage from "@/components/shared/error-message";
import Input from "@/components/shared/input";
import Label from "@/components/shared/label";
import TextArea from "@/components/shared/text-area";
import { UseFormReturn } from "react-hook-form";
import { NewStatementForm } from "../new-statement";
import css from "./first-step.module.css";
import StatementTypeSelect from "./statement-type-select/statement-type-select";

interface Props {
	form: UseFormReturn<NewStatementForm>;
	setStep: React.Dispatch<React.SetStateAction<number>>;
}

function FirstStep({ form, setStep }: Props) {
	const desc = form.watch("description") || "";
	const isTypeSelected = !!form.watch("topic");

	return (
		<>
			<header className={css.header}>
				<h2>
					Поддержка{" "}
					<span className={css.steps}>
						<span className={css.current_step}>1</span>
						<span>/</span>
						<span>2</span>
					</span>
				</h2>
			</header>
			<div className={css.body}>
				<div>
					<Label required>E-mail</Label>
					<Input
						placeholder={"example@gmail.com"}
						{...form.register("email", {
							required: {
								value: true,
								message: "Это поле обязательно",
							},
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Некорректная почта",
							},
						})}
					/>
					<ErrorMessage>
						{form.formState.errors.email?.message}
					</ErrorMessage>
				</div>
				<div>
					<Label required>Тема обращения</Label>
					<StatementTypeSelect form={form} />
					<ErrorMessage>
						{form.formState.errors.topic?.message}
					</ErrorMessage>
				</div>
				<div>
					<div className={css.desc_label}>
						<Label required>Описание</Label>
						<div className={css.counter}>{desc.length}/200</div>
					</div>
					<TextArea
						{...form.register("description", {
							required: {
								value: true,
								message: "Это поле обязательно",
							},
						})}
						rows={2}
						maxLength={200}
						placeholder='Ваш вопрос'
					/>
					<ErrorMessage>
						{form.formState.errors.description?.message}
					</ErrorMessage>
				</div>
			</div>
			<footer className={css.footer}>
				<Button
					type='button'
					variant='primary'
					full
					disabled={!form.formState.isValid || !isTypeSelected}
					onClick={() => setStep(1)}
				>
					Далее
				</Button>
			</footer>
		</>
	);
}

export default FirstStep;
