import React from "react";

import { cn } from "@/utils/cn";
import css from "./badge.module.css";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
	status?: string;
}

function Badge({ status, className, ...props }: Props) {
	return (
		<span
			{...props}
			className={cn(css.badge, status && css[status], className)}
		/>
	);
}

export default Badge;
