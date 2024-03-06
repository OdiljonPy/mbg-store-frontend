import React from 'react';
import css from "./addressItem.module.css"

interface Props {
    title: string,
    openModal: (value: string) => void
}

function AddressItem({title, openModal}: Props) {
    return (
        <div className={css.addressItem}>
            <b className={css.addressItemTitle}>{title}</b>
            <button onClick={() => openModal(title)} className={css.addressItemButton}>выбрать магазин</button>
        </div>
    );
}

export default AddressItem;