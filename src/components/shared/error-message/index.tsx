import React, { forwardRef } from "react";

import { cn } from "../../../utils/cn";
import css from "./error-message.module.css";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

const ErrorMessage = forwardRef<HTMLParagraphElement, Props>(
	({ className, children, ...props }, ref) => {
		return (
			<>
				{!!children && (
					<p
						{...props}
						ref={ref}
						className={cn(css.error, className)}
					>
						{children}
					</p>
				)}
			</>
		);
	}
);

ErrorMessage.displayName = "ErrorMessage";

export default ErrorMessage;
