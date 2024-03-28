import { useTranslations } from "next-intl";
import { useDropzone } from "react-dropzone";
import { UseFormReturn } from "react-hook-form";
import { NewStatementForm } from "../../new-statement";
import css from "./image-uploader.module.css";

interface props {
	form: UseFormReturn<NewStatementForm>;
}

const ImageUploader = ({ form }: props) => {
	const t = useTranslations();
	const files = form.watch("files") || [];

	const onDrop = (acceptedFiles: File[]) => {
		const file = acceptedFiles[0];
		if (files.length >= 4) return;
		form.setValue("files", [...files, file]);
	};

	const { getRootProps, getInputProps } = useDropzone({
		onDrop: onDrop,
		multiple: true,
	});

	return (
		<div
			className={css.dropzone}
			{...getRootProps()}
		>
			<input
				className={css.input}
				{...getInputProps()}
				type={"file"}
				accept='image/*'
			/>
			<svg
				width='34'
				height='34'
				viewBox='0 0 34 34'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M29.75 17C29.75 17.2818 29.6381 17.552 29.4388 17.7513C29.2395 17.9506 28.9693 18.0625 28.6875 18.0625H18.0625V28.6875C18.0625 28.9693 17.9506 29.2395 17.7513 29.4388C17.552 29.6381 17.2818 29.75 17 29.75C16.7182 29.75 16.448 29.6381 16.2487 29.4388C16.0494 29.2395 15.9375 28.9693 15.9375 28.6875V18.0625H5.3125C5.03071 18.0625 4.76046 17.9506 4.5612 17.7513C4.36194 17.552 4.25 17.2818 4.25 17C4.25 16.7182 4.36194 16.448 4.5612 16.2487C4.76046 16.0494 5.03071 15.9375 5.3125 15.9375H15.9375V5.3125C15.9375 5.03071 16.0494 4.76046 16.2487 4.5612C16.448 4.36194 16.7182 4.25 17 4.25C17.2818 4.25 17.552 4.36194 17.7513 4.5612C17.9506 4.76046 18.0625 5.03071 18.0625 5.3125V15.9375H28.6875C28.9693 15.9375 29.2395 16.0494 29.4388 16.2487C29.6381 16.448 29.75 16.7182 29.75 17Z'
					fill='#232323'
				/>
			</svg>
			<p className={css.description}>{t("feedback.photoPlaceholder")}</p>
		</div>
	);
};

export default ImageUploader;
