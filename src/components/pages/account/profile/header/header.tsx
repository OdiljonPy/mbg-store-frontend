import { useTranslations } from "next-intl";
import Link from "next/link";
import Logout from "../../components/logout/logout";
import css from "./header.module.css";

function Header() {
	const t = useTranslations();

	return (
		<div className={css.header}>
			<h1 className={css.title}>
				<Link href='/account'>
					<svg
						className={css.icon_back}
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M15.5302 18.9693C15.5999 19.039 15.6552 19.1217 15.6929 19.2128C15.7306 19.3038 15.75 19.4014 15.75 19.4999C15.75 19.5985 15.7306 19.6961 15.6929 19.7871C15.6552 19.8781 15.5999 19.9609 15.5302 20.0306C15.4606 20.1002 15.3778 20.1555 15.2868 20.1932C15.1957 20.2309 15.0982 20.2503 14.9996 20.2503C14.9011 20.2503 14.8035 20.2309 14.7124 20.1932C14.6214 20.1555 14.5387 20.1002 14.469 20.0306L6.96899 12.5306C6.89926 12.4609 6.84394 12.3782 6.80619 12.2871C6.76845 12.1961 6.74902 12.0985 6.74902 11.9999C6.74902 11.9014 6.76845 11.8038 6.80619 11.7127C6.84394 11.6217 6.89926 11.539 6.96899 11.4693L14.469 3.9693C14.6097 3.82857 14.8006 3.74951 14.9996 3.74951C15.1986 3.74951 15.3895 3.82857 15.5302 3.9693C15.671 4.11003 15.75 4.30091 15.75 4.49993C15.75 4.69895 15.671 4.88982 15.5302 5.03055L8.55993 11.9999L15.5302 18.9693Z'
							fill='#232323'
						/>
					</svg>
				</Link>
				{t("header.profile")}
			</h1>
			<Logout className={css.logout_btn}>
				{t("profile.logout.title")}
			</Logout>
		</div>
	);
}

export default Header;
