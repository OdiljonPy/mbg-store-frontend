import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";

import css from "./button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "tertiary" | "danger";
	iconOnly?: boolean;
	rounded?: boolean;
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
	rounded,
	full,
	loading,
	leftIcon,
	rightIcon,
	width,
	height,
	disabled,
	children,
	className,
	style,
	...props
}: Props) {
	return (
		<button
			{...props}
			className={cn(
				css.btn,
				full && css.full,
				rounded && css.rounded,
				!loading && !disabled && css[variant],
				iconOnly && css.icon_only,
				className
			)}
			disabled={loading || disabled}
			style={{
				width,
				height,
				...style,
			}}
		>
			{loading && (
				<span className={css.spin_wrapper}>
					<svg
						className={css.spin}
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path d='M21 12a9 9 0 1 1-6.219-8.56' />
					</svg>
				</span>
			)}
			{leftIcon && <span className={css.left_icon}>{leftIcon}</span>}
			{children}
			{rightIcon && <span className={css.right_icon}>{rightIcon}</span>}
		</button>
	);
}

export default Button;
