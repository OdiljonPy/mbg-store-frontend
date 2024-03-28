import { forwardRef } from "react";
import { cn } from "../../../utils/cn";
import css from "./label.module.css";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
	required?: boolean;
}

const Label = forwardRef<HTMLLabelElement, Props>(
	({ required, children, className, ...props }, ref) => {
		return (
			<label
				{...props}
				ref={ref}
				className={cn(css.label, className)}
			>
				{children}
				{required && <span className={css.required}>*</span>}
			</label>
		);
	}
);

Label.displayName = "Label";

export default Label;
