import { cn } from "@/utils/cn";
import { forwardRef } from "react";

import css from "./textarea.module.css";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	resize?: "none" | "both" | "horizontal" | "vertical";
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
	({ className, resize = "none", ...props }, ref) => {
		return (
			<textarea
				{...props}
				ref={ref}
				className={cn(css.textarea, css[resize], className)}
			/>
		);
	}
);

TextArea.displayName = "TextArea";

export default TextArea;
