import React from 'react';
import css from './contact-item.module.css'
import {IContact} from "@/layout/components/footer/components/contacts/data-types/contacts";
import {useTranslations} from 'next-intl';
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";

interface props {
    item: IContact
}

const ContactItem = ({item}: props) => {
    const t = useTranslations()
    const {
        icon,
        title,
        label,
        path
    } = item
    return (
        <a href={path} className={css.item}>
            <span className={css.top}>
                <span className={css.icon}>
                    <ResponsiveImage src={icon} alt={title}/>
                </span>
                <span className={css.label}>
                  {t(label)}
                </span>
            </span>
            <span className={css.text}>
                {title}
            </span>
        </a>
    );
};

export default ContactItem;