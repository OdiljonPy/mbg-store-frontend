import React from 'react';
import css from "@/components/pages/products/filters/mobile/categories/body/body.module.css";
import {storesList} from "@/constants/stores/stores";
import Store from "@/components/pages/products/filters/mobile/stores/store/store";

interface props {

}

const Body = (props: props) => {
    return (
        <div className={css.wrapper}>
            {storesList.map((item) => (
                <Store item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Body;