import LoginModal from "@/components/pages/home/login/login";
import Otp from "@/components/pages/home/otp/otp";
import SignUpModal from "@/components/pages/home/signup/signup";
import { cartBadge, favouritesBadge } from "@/constants/badges/badges";
import Login from "@/layout/components/header/main-header/components/login/login";
import MenuItemBadge from "@/layout/components/header/main-header/components/menu-item-badge/menu-item-badge";
import BookOpen from "@/layout/components/mobile_navbar/icon/book_open";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Account from "../header/main-header/components/account/account";
import css from "./mobile_navbar.module.css";

interface IState {
	phoneNumber: string;
}

const MobileNavbar = () => {
	const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
	const [signUpModalOpen, setSignUpModalOpen] = useState<boolean>(false);
	const [otpModalOpen, setOtpModalOpen] = useState<boolean>(false);
	const phoneNumber = useSelector((state: IState) => state.phoneNumber);

	const { isLoggedIn } = useSelector((state: RootState) => state.auth);
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
				<Login
					mobile
					setLoginModalOpen={setLoginModalOpen}
				/>
			)}
			<LoginModal
				open={loginModalOpen}
				setOpen={setLoginModalOpen}
				setSignUpOpen={setSignUpModalOpen}
			/>
			<SignUpModal
				setOtpModalOpen={setOtpModalOpen}
				open={signUpModalOpen}
				setOpen={setSignUpModalOpen}
				setLoginOpen={setLoginModalOpen}
			/>
			<Otp
				setLoginOpen={setLoginModalOpen}
				phoneNumber={phoneNumber}
				open={otpModalOpen}
				setOpen={setOtpModalOpen}
			/>
		</div>
	);
};

export default MobileNavbar;
