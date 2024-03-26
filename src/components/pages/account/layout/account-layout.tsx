import { PropsWithChildren } from "react";
import AccountNavigation from "../components/nav/navigation";
import css from "./account-layout.module.css";

function AccountLayout({ children }: PropsWithChildren) {
	return (
		<div className={css.layout}>
			<div className={["container", css.container].join(" ")}>
				<div className={css.wrapper}>
					<aside className={css.sidebar}>
						<AccountNavigation />
					</aside>
					<main className={css.main}>{children}</main>
				</div>
			</div>
		</div>
	);
}

export default AccountLayout;
