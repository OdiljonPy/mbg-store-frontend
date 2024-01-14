import React from 'react';
import css from './contacts.module.css'
import Logo from "@/components/shared/logo/logo";
import ContactList from "@/layout/components/footer/components/contacts/contact-list/contact-list";

interface props {

}


const Contacts = (props: props) => {
    return (
        <div className={css.contacts}>
            <div className={css.logo}>
                <Logo/>
            </div>
            <ContactList/>
        </div>
    );
};

export default Contacts;