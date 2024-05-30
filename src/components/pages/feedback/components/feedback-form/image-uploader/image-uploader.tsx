import { useTranslations } from "next-intl";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useToasts } from "react-toast-notifications";
import css from "./image-uploader.module.css";

interface props {
	onUploadImage: (image: File) => void;
	isHide?: boolean;
}

const ImageUploader = ({ onUploadImage, isHide }: props) => {
	const t = useTranslations();
	const onDrop = useCallback((acceptedFiles: File[]) => {
		const file = acceptedFiles[0];
		if (!file) return;
		onUploadImage(file);
	}, []);

	const { addToast } = useToasts();

	const dropImageErrorsMap: Record<string, string> = {
		"file-too-large": "feedback.file_too_large",
		"file-invalid-type": "feedback.file_invalid_type",
	};

	const { getRootProps, getInputProps } = useDropzone({
		onDrop: onDrop,
		multiple: true,
		accept: {
			"image/*": [".png", ".jpg", ".jpeg"],
		},
		onDropRejected: (err) => {
			const { code } = err?.[0].errors?.[0];
			let errorMsg = "";
			if (code in dropImageErrorsMap) {
				errorMsg = dropImageErrorsMap[code];
			} else {
				errorMsg = "feedback.file_invalid";
			}
			addToast(t(errorMsg), { appearance: "error", autoDismiss: true });
		},
		maxSize: 2 * 1024 * 1024,
	});

	return (
		<div
			className={`${css.dropzone} ${isHide ? css.hide : ""}`}
			{...getRootProps()}
		>
			<input
				className={css.input}
				{...getInputProps()}
				type={"file"}
				accept='image/*'
			/>
			<svg
				className={css.icon}
				width='42'
				height='42'
				viewBox='0 0 42 42'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					className={css.path}
					d='M42 21C42 21.4641 41.8156 21.9093 41.4874 22.2374C41.1592 22.5656 40.7141 22.75 40.25 22.75H22.75V40.25C22.75 40.7141 22.5656 41.1592 22.2374 41.4874C21.9093 41.8156 21.4641 42 21 42C20.5359 42 20.0908 41.8156 19.7626 41.4874C19.4344 41.1592 19.25 40.7141 19.25 40.25V22.75H1.75C1.28587 22.75 0.840752 22.5656 0.512563 22.2374C0.184375 21.9093 0 21.4641 0 21C0 20.5359 0.184375 20.0908 0.512563 19.7626C0.840752 19.4344 1.28587 19.25 1.75 19.25H19.25V1.75C19.25 1.28587 19.4344 0.840752 19.7626 0.512563C20.0908 0.184375 20.5359 0 21 0C21.4641 0 21.9093 0.184375 22.2374 0.512563C22.5656 0.840752 22.75 1.28587 22.75 1.75V19.25H40.25C40.7141 19.25 41.1592 19.4344 41.4874 19.7626C41.8156 20.0908 42 20.5359 42 21Z'
					fill='#232323'
				/>
			</svg>
			<p className={css.description}>{t("feedback.photoPlaceholder")}</p>
		</div>
	);
};

export default ImageUploader;
