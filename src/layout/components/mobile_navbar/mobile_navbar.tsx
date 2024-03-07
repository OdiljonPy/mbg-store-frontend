import css from "./mobile_navbar.module.css"
import MenuItemBadge from "@/layout/components/header/main-header/components/menu-item-badge/menu-item-badge";
import {cartBadge, favouritesBadge} from "@/constants/badges/badges";
import Login from "@/layout/components/header/main-header/components/login/login";
import React, {useState} from "react";
import BookOpen from "@/layout/components/mobile_navbar/icon/book_open";
import LoginModal from "@/components/pages/home/login/login";
import SignUpModal from "@/components/pages/home/signup/signup";
import Otp from "@/components/pages/home/otp/otp";
import {useSelector} from "react-redux";

interface IState {
    phoneNumber: string
}


const MobileNavbar = () => {
    const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false)
    const [signUpModalOpen, setSignUpModalOpen] = useState<boolean>(false)
    const [otpModalOpen, setOtpModalOpen] = useState<boolean>(false)

    const phoneNumber = useSelector((state:IState) => state.phoneNumber)

    return (
        <div className={css.mobile}>
            <BookOpen path='/catalog'/>
            <MenuItemBadge badge={favouritesBadge} mobile={true}/>
            <MenuItemBadge badge={cartBadge} mobile={true}/>
            <Login setLoginModalOpen={setLoginModalOpen} mobile={true}/>
            <LoginModal open={loginModalOpen} setOpen={setLoginModalOpen} setSignUpOpen={setSignUpModalOpen}/>
            <SignUpModal setOtpModalOpen={setOtpModalOpen} open={signUpModalOpen} setOpen={setSignUpModalOpen}
                         setLoginOpen={setLoginModalOpen}/>
            <Otp phoneNumber={phoneNumber} open={otpModalOpen} setOpen={setOtpModalOpen} />
        </div>
    )
}

export default MobileNavbar