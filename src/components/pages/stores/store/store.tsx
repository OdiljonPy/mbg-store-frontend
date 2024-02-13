import React from 'react';
import css from './store.module.css'
import {IStore} from "@/components/pages/stores/data-types/store";
import Link from "next/link";

interface props {
    store: IStore
}

const Store = ({store}: props) => {
    const { title} = store
    return (
        <Link href={'/stores/1?sort=popular'} className={css.store}>
            {title}
        </Link>
    );
};

export default Store;