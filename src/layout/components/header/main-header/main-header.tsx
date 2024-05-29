"use client";
import Auth from "@/components/pages/home/auth/auth";
import LogoMobile from "@/components/shared/logo-mobile/logo-mobile";
import Logo from "@/components/shared/logo/logo";
import { cartBadge, favouritesBadge } from "@/constants/badges/badges";
import CatalogSelect from "@/layout/components/header/main-header/components/catalog-select/catalog-select";
import LanguageSwitcher from "@/layout/components/header/main-header/components/language-switcher/language-switcher";
import Login from "@/layout/components/header/main-header/components/login/login";
import MenuItemBadge from "@/layout/components/header/main-header/components/menu-item-badge/menu-item-badge";
import MobileNav from "@/layout/components/header/main-header/components/mobile-nav/mobile-nav";
import { RootState } from "@/store";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Account from "./components/account/account";
import css from "./main-header.module.css";

const ProductsSearch = dynamic(
	() =>
		import(
			"@/layout/components/header/main-header/components/products-search/products-search"
		),
	{
		ssr: false,
	}
);

const MainHeader = () => {
	const { isLoggedIn } = useSelector((state: RootState) => state.login);
	const totalCountCart = useSelector(
		(state: RootState) => state.basket.totalCountProduct
	);
	const totalCountFavourite = useSelector(
		(state: RootState) => state.favorites.total_count
	);
	const [mounted, setMounted] = useState(false);
	cartBadge.count = totalCountCart ? totalCountCart : 0;
	favouritesBadge.count = totalCountFavourite ? totalCountFavourite : 0;
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className={css.header}>
			<div className={"container"}>
				<div className={css.wrapper}>
					<div className={css.logo}>
						<Logo />
					</div>
					<div className={css.mobileLogo}>
						<LogoMobile />
					</div>
					<div className={css.search}>
						<CatalogSelect />
						<ProductsSearch />
					</div>
					<MobileNav />
					<div className={css.nav}>
						<LanguageSwitcher />
						<MenuItemBadge badge={favouritesBadge} />
						{isLoggedIn && mounted ? (
							<Account />
						) : (
							<Auth>
								<Login />
							</Auth>
						)}
						<MenuItemBadge badge={cartBadge} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainHeader;
