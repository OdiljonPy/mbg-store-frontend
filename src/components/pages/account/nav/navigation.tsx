import { accountNavigationList } from "@/constants/account/account-nav";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./navigation.module.css";

function AccountNavigation() {
	const pathname = usePathname();

	const t = useTranslations();
	return (
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
					<div>
						{item.icon}
						<span className={css.title}>{t(item.title)}</span>
					</div>
					<svg
						className={css.arrow_right}
						width='18'
						height='14'
						viewBox='0 0 18 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M17.0489 7.4863L10.8614 13.6738C10.7324 13.8028 10.5574 13.8753 10.375 13.8753C10.1926 13.8753 10.0176 13.8028 9.88859 13.6738C9.75959 13.5448 9.68712 13.3698 9.68712 13.1874C9.68712 13.005 9.75959 12.83 9.88859 12.701L14.903 7.68739H1.4375C1.25516 7.68739 1.0803 7.61496 0.951364 7.48603C0.822433 7.3571 0.75 7.18223 0.75 6.99989C0.75 6.81756 0.822433 6.64269 0.951364 6.51376C1.0803 6.38483 1.25516 6.31239 1.4375 6.31239H14.903L9.88859 1.2988C9.75959 1.1698 9.68712 0.994832 9.68712 0.812394C9.68712 0.629956 9.75959 0.454991 9.88859 0.325988C10.0176 0.196985 10.1926 0.124512 10.375 0.124512C10.5574 0.124512 10.7324 0.196985 10.8614 0.325988L17.0489 6.51349C17.1128 6.57734 17.1635 6.65316 17.1981 6.73662C17.2327 6.82008 17.2505 6.90955 17.2505 6.99989C17.2505 7.09024 17.2327 7.1797 17.1981 7.26317C17.1635 7.34663 17.1128 7.42245 17.0489 7.4863Z'
							fill='#C2C2C2'
						/>
					</svg>
				</Link>
			))}
		</nav>
	);
}

export default AccountNavigation;
