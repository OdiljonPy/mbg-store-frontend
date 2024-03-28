import { forwardRef } from "react";
import { cn } from "../../../utils/cn";
import css from "./input.module.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, Props>(
	({ className, ...props }, ref) => {
		return (
			<input
				{...props}
				ref={ref}
				className={cn(css.input, className)}
			/>
		);
	}
);

Input.displayName = "Input";

export default Input;
