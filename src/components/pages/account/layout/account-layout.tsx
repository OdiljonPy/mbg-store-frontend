import { PropsWithChildren } from "react";
import AccountSidebar from "./sidebar/sidebar";
import css from "./account-layout.module.css";

function AccountLayout({ children }: PropsWithChildren) {
	return (
		<div className={css.layout}>
			<div className={"container"}>
				<div className={css.wrapper}>
					<AccountSidebar />
					<main className={css.main}>{children}</main>
				</div>
			</div>
		</div>
	);
}

export default AccountLayout;
