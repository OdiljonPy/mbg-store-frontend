import React from 'react';
import css from "@/components/pages/products/filters/mobile/categories/body/body.module.css";
import {storesList} from "@/constants/stores/stores";
import CustomCheckbox from "@/components/pages/products/filters/mobile/components/custom-checkbox/custom-checkbox";
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";

interface props {
    storeList : ICustomCheckbox[]
}

const Body = ({storeList}: props) => {
    return (
        <div className={css.wrapper}>
            {storeList.map((item) => (
                <CustomCheckbox name={'stores'} item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Body;