import React, { ReactNode } from "react";
import { cn } from "@/utils/cn";
import css from "./badge.module.css";

interface props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  color: string;
  children?: ReactNode;
}

const Badge = ({ text, color, className, children, ...props }: props) => {
  return (
    <div
      {...props}
      className={cn(css.badge, className)}
      style={{ background: color }}
    >
      {children}
      {text}
    </div>
  );
};

export default Badge;
