import React from 'react';
import css from './store.module.css'
import {IStore} from "@/components/pages/stores/data-types/store";

interface props {
    store: IStore
}

const Store = ({store}: props) => {
    const { title} = store
    return (
        <div className={css.store}>
            {title}
        </div>
    );
};

export default Store;