import React from "react";
import { cn } from "../../../utils/cn";
import css from "./badge.module.css";

interface props extends React.HTMLAttributes<HTMLDivElement> {
	text: string;
	color: string;
}

const Badge = ({ text, color, className, ...props }: props) => {
	return (
		<div
			{...props}
			className={cn(css.badge, className)}
			style={{ background: color }}
		>
			{text}
		</div>
	);
};

export default Badge;
