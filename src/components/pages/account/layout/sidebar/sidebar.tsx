import { accountNavigationList } from "@/constants/account/account-nav";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./sidebar.module.css";

function AccountSidebar() {
	const pathname = usePathname();

	const t = useTranslations();
	return (
		<aside className={css.sidebar}>
			<nav className={css.nav}>
				{accountNavigationList.map((item) => (
					<Link
						key={item.path}
						className={[
							css.link,
							pathname === item.path ? css.active : "",
						].join(" ")}
						href={item.path}
					>
						{item.icon}
						<span className={css.title}>{t(item.title)}</span>
					</Link>
				))}
			</nav>
		</aside>
	);
}

export default AccountSidebar;
