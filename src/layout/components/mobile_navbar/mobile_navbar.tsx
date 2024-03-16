import Auth from "@/components/pages/home/auth/auth";
import { cartBadge, favouritesBadge } from "@/constants/badges/badges";
import Login from "@/layout/components/header/main-header/components/login/login";
import MenuItemBadge from "@/layout/components/header/main-header/components/menu-item-badge/menu-item-badge";
import BookOpen from "@/layout/components/mobile_navbar/icon/book_open";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Account from "../header/main-header/components/account/account";
import css from "./mobile_navbar.module.css";

const MobileNavbar = () => {
	const { isLoggedIn } = useSelector((state: RootState) => state.login);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className={css.mobile}>
			<BookOpen path='/catalog' />
			<MenuItemBadge
				badge={favouritesBadge}
				mobile={true}
			/>
			<MenuItemBadge
				badge={cartBadge}
				mobile={true}
			/>
			{isLoggedIn && mounted ? (
				<Account mobile />
			) : (
				<Auth>
					<Login mobile />
				</Auth>
			)}
		</div>
	);
};

export default MobileNavbar;
