import React, {useState} from "react";
import css from "./header.module.css";
import TopHeader from "@/layout/components/header/top-header/top-header";
import MainHeader from "@/layout/components/header/main-header/main-header";
import Login from "@/components/pages/home/login/login";
import Signup from "@/components/pages/home/signup/signup";
import Otp from "@/components/pages/home/otp/otp";
import {useSelector} from "react-redux";

interface IState {
    phoneNumber: string
}

const Header = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [signUpModalOpen, setSignUpModalOpen] = useState(false);
    const [otpModalOpen, setOtpModalOpen] = useState(false);

    const phoneNumber = useSelector((state:IState) => state.phoneNumber)

    return (
        <header className={css.header}>
            <TopHeader/>
            <MainHeader setLoginModalOpen={setLoginModalOpen}/>
            <Signup setOtpModalOpen={setOtpModalOpen}  setLoginOpen={setLoginModalOpen} open={signUpModalOpen} setOpen={setSignUpModalOpen} />
            <Login setSignUpOpen={setSignUpModalOpen} open={loginModalOpen} setOpen={setLoginModalOpen}/>
            <Otp phoneNumber={phoneNumber} open={otpModalOpen} setOpen={setOtpModalOpen} />
        </header>
    );
};

export default Header;
