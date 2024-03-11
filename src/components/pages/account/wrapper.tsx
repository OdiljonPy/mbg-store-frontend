import { PropsWithChildren } from "react";
import css from "./wrapper.module.css";

function AccountWrapper({ children }: PropsWithChildren) {
	return (
		<div className={css.wrapper}>
			<div className={"container"}>{children}</div>
		</div>
	);
}

export default AccountWrapper;
