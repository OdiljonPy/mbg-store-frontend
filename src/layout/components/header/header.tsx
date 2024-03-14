import Login from "@/components/pages/home/login/login";
import Otp from "@/components/pages/home/otp/otp";
import Signup from "@/components/pages/home/signup/signup";
import MainHeader from "@/layout/components/header/main-header/main-header";
import TopHeader from "@/layout/components/header/top-header/top-header";
import { useState } from "react";
import { useSelector } from "react-redux";
import css from "./header.module.css";

interface IState {
	phoneNumber: string;
}

const Header = () => {
	const [loginModalOpen, setLoginModalOpen] = useState(false);
	const [signUpModalOpen, setSignUpModalOpen] = useState(false);
	const [otpModalOpen, setOtpModalOpen] = useState(false);

	const phoneNumber = useSelector((state: IState) => state.phoneNumber);

	return (
		<header className={css.header}>
			<TopHeader />
			<MainHeader setLoginModalOpen={setLoginModalOpen} />
			<Signup
				setOtpModalOpen={setOtpModalOpen}
				setLoginOpen={setLoginModalOpen}
				open={signUpModalOpen}
				setOpen={setSignUpModalOpen}
			/>
			<Login
				setSignUpOpen={setSignUpModalOpen}
				open={loginModalOpen}
				setOpen={setLoginModalOpen}
			/>
			<Otp
				setLoginOpen={setLoginModalOpen}
				phoneNumber={phoneNumber}
				open={otpModalOpen}
				setOpen={setOtpModalOpen}
			/>
		</header>
	);
};

export default Header;
