import React from 'react';
import css from "@/components/pages/products/filters/mobile/categories/body/body.module.css";
import {storesList} from "@/constants/stores/stores";
import CustomCheckbox from "@/components/pages/products/filters/mobile/components/custom-checkbox/custom-checkbox";

interface props {

}

const Body = (props: props) => {
    return (
        <div className={css.wrapper}>
            {storesList.map((item) => (
                <CustomCheckbox name={'stores'} item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Body;