import React from 'react';
import css from "@/components/pages/products/filters/mobile/categories/body/body.module.css";
import {accessibilityList} from "@/components/pages/products/filters/desktop/accessibility/accessibility";
import CustomCheckbox from "@/components/pages/products/filters/mobile/components/custom-checkbox/custom-checkbox";

interface props {

}

const Body = (props: props) => {
    return (
        <div className={css.wrapper}>
            {accessibilityList.map((item) => (
                <CustomCheckbox name={'accessibility'} item={item} key={item.id} hasCount={false}/>
            ))}
        </div>
    );
};

export default Body;