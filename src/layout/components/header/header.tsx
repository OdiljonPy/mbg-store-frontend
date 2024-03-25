import MainHeader from "@/layout/components/header/main-header/main-header";
import TopHeader from "@/layout/components/header/top-header/top-header";
import css from "./header.module.css";

const Header = () => {
	return (
		<header className={css.header}>
			<TopHeader />
			<MainHeader />
		</header>
	);
};

export default Header;
