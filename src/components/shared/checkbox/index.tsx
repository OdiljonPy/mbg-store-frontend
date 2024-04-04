import { cn } from "@/utils/cn";
import { forwardRef } from "react";
import css from "./checkbox.module.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = forwardRef<HTMLInputElement, Props>(
	({ className, ...props }, ref) => {
		return (
			<input
				{...props}
				type='checkbox'
				ref={ref}
				className={cn(css.checkbox, className)}
			/>
		);
	}
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
