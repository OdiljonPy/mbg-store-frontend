import Button from "@/components/shared/button";
import Label from "@/components/shared/label";
import { UseFormReturn } from "react-hook-form";
import { NewStatementForm } from "../new-statement";
import ImageUploader from "./image-uploader/image-uploader";
import StatementImage from "./image/image";
import css from "./second-step.module.css";

interface Props {
	form: UseFormReturn<NewStatementForm>;
	setStep: React.Dispatch<React.SetStateAction<number>>;
}

function SecondStep({ form, setStep }: Props) {
	const files = form.watch("files") || [];

	return (
		<>
			<header className={css.header}>
				<h2 className={css.title}>
					Поддержка{" "}
					<span className={css.steps}>
						<span>1</span>
						<span>/</span>
						<span className={css.current_step}>2</span>
					</span>
				</h2>
			</header>
			<div className={css.body}>
				<div>
					<Label>
						Приложения{" "}
						<span className={css.max_count_text}>(максимум 4)</span>
					</Label>
					<ImageUploader form={form} />
				</div>
				<div className={css.images}>
					{files?.map((_, index) => (
						<StatementImage
							key={index}
							form={form}
							index={index}
						/>
					))}
				</div>
			</div>
			<footer className={css.footer}>
				<Button
					type='button'
					variant='secondary'
					onClick={() => setStep(0)}
				>
					Назад
				</Button>
				<Button
					type='submit'
					style={{ width: "100%" }}
				>
					Отправить
				</Button>
			</footer>
		</>
	);
}

export default SecondStep;
