import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";

import css from "./button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "tertiary" | "danger";
	full?: boolean;
	loading?: boolean;
}

function Button({
	children,
	className,
	full,
	loading,
	variant = "primary",
	...props
}: Props) {
	return (
		<button
			{...props}
			className={cn(css.btn, full && css.full, css[variant], className)}
		>
			<span className={css.spin_wrapper}>
				{loading && (
					<svg
						className={css.spin}
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						<path d='M21 12a9 9 0 1 1-6.219-8.56' />
					</svg>
				)}
			</span>
			{children}
		</button>
	);
}

export default Button;
