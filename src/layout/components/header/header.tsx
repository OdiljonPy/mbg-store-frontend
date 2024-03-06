import React, {useState} from "react";
import css from "./header.module.css";
import TopHeader from "@/layout/components/header/top-header/top-header";
import MainHeader from "@/layout/components/header/main-header/main-header";
import Login from "@/components/pages/home/login/login";
import Signup from "@/components/pages/home/signup/signup";

interface props {
}

const Header = (props: props) => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [signUpModalOpen, setSignUpModalOpen] = useState(false);
    return (
        <header className={css.header}>
            <TopHeader/>
            <MainHeader setLoginModalOpen={setLoginModalOpen}/>
            <Signup setLoginOpen={setLoginModalOpen} open={signUpModalOpen} setOpen={setSignUpModalOpen} />
            <Login setSignUpOpen={setSignUpModalOpen} open={loginModalOpen} setOpen={setLoginModalOpen}/>
        </header>
    );
};

export default Header;
