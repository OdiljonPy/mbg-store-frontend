import React from 'react';
import css from './store-letter.module.css'
import {IStore} from "@/components/pages/stores/data-types/store";
import Store from "@/components/pages/stores/store/store";

interface props {
    store_list: IStore[]
}

const StoreList = ({store_list}: props) => {
    return (
        <div className={css.wrapper}>
            {store_list.map((store) => (
                <Store store={store} key={store.id}/>
            ))}
        </div>
    );
};

export default StoreList;