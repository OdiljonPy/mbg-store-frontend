import React from 'react';
import css from './contact-list.module.css'
import {contacts} from "@/constants/contacts";
import ContactItem from "@/layout/components/footer/components/contacts/contact-item/contact-item";

interface props {

}

const ContactList = (props: props) => {
    return (
        <ul className={css.list}>
            {contacts.map((contact) => (
                <ContactItem item={contact} key={contact.path}/>
            ))}
        </ul>
    );
};

export default ContactList;