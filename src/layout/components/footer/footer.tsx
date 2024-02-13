import React from 'react';
import css from './footer.module.css'
import Contacts from "@/layout/components/footer/components/contacts/contacts";
import Information from "@/layout/components/footer/components/information/information";
import Copyright from "@/layout/components/footer/components/copyright/copyright";
import MobileAppQr from "@/layout/components/footer/components/mobile-app-qr/mobile-app-qr";

interface props {

}

const Footer = (props: props) => {
    return (
        <footer className={css.footer}>
            <div className={'container'}>
                <div className={css.wrapper}>
                    <Contacts/>
                    <Information/>
                    <MobileAppQr/>
                </div>
            </div>
            <Copyright/>
        </footer>
    );
};

export default Footer;