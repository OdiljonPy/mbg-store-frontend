import { raleway } from "@/constants/fonts/fonts";
import { IBadge } from "@/layout/components/header/main-header/data-types/badge";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./menu-item-badge.module.css";

const ClientSideBadge = dynamic(
	() =>
		import(
			"@/layout/components/header/main-header/components/menu-item-badge/menu-ant-badge"
		),
	{
		ssr: false,
	}
);

interface props {
	badge: IBadge;
	mobile?: boolean;
}

const MenuItemBadge = ({ badge, mobile }: props) => {
	const t = useTranslations();
	const { title, path } = badge;
	const pathname = usePathname();

	return (
		<Link
			href={path}
			className={`${css.menuItem} ${
				pathname === path ? css.active : ""
			}  ${raleway.className}`}
		>
			<ClientSideBadge badge={badge} mobile={mobile} />
			{!mobile && <span className={css.text}>{t(title)}</span>}
		</Link>
	);
};

export default MenuItemBadge;
