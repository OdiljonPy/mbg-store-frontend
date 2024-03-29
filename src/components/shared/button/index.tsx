import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";

import css from "./button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "tertiary" | "danger";
	iconOnly?: boolean;
	rounded?: "default" | "full" | string;
	full?: boolean;
	loading?: boolean;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	width?: string | number;
	height?: string | number;
}

function Button({
	variant = "primary",
	iconOnly,
	rounded = "default",
	full,
	loading,
	leftIcon,
	rightIcon,
	width,
	height,
	disabled,
	children,
	className,
	...props
}: Props) {
	return (
		<button
			{...props}
			className={cn(
				css.btn,
				full && css.full,
				css[rounded],
				css[variant],
				iconOnly && css.icon_only,
				className
			)}
			disabled={loading || disabled}
			style={{
				width,
				height,
				borderRadius:
					rounded === "full"
						? "50%"
						: rounded === "default"
						? "16px"
						: rounded,
			}}
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
			{leftIcon && <span className={css.left_icon}>{leftIcon}</span>}
			{children}
			{rightIcon && <span className={css.right_icon}>{rightIcon}</span>}
		</button>
	);
}

export default Button;
