import Button from "@/components/shared/button";
import Label from "@/components/shared/label";
import { RootState } from "@/store";
import { UseFormReturn } from "react-hook-form";
import { useSelector } from "react-redux";
import { useTranslations } from "use-intl";
import { NewStatementForm } from "../new-statement";
import FileUploader from "./file-uploader/file-uploader";
import PeekedFile from "./peeked-file/peeked-file";
import css from "./second-step.module.css";

interface Props {
	form: UseFormReturn<NewStatementForm>;
	setStep: React.Dispatch<React.SetStateAction<number>>;
}

function SecondStep({ form, setStep }: Props) {
	const t = useTranslations("support.second_step");

	const files = form.watch("files");
	const { postLoading } = useSelector((state: RootState) => state.supports);

	return (
		<>
			<header className={css.header}>
				<h2 className={css.title}>
					{t("title")}{" "}
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
						{t("applications")}{" "}
						<span className={css.max_count_text}>
							({t("max_count")})
						</span>
					</Label>
					<FileUploader form={form} />
				</div>
				<div className={css.images}>
					{files.map((_, index) => (
						<PeekedFile key={index} form={form} index={index} />
					))}
				</div>
			</div>
			<footer className={css.footer}>
				<Button
					type='button'
					variant='secondary'
					onClick={() => setStep(0)}
				>
					{t("back")}
				</Button>
				<Button
					type='submit'
					style={{ width: "100%" }}
					loading={postLoading}
				>
					{t("send")}
				</Button>
			</footer>
		</>
	);
}

export default SecondStep;
