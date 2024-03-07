import React from 'react';
import css from './information-list.module.css'
import {informationItems} from "@/constants/about/information";
import InformationItem from "@/components/pages/about/information/information-item/information-item";

interface Props {

}


const InformationList = (props: Props) => {
    return (
        <div className={css.list}>
            {informationItems.map((item) => (
                <InformationItem item={item} key={item.title}/>
            ))}
        </div>
    );
};

export default InformationList;