import React from 'react';
import css from './deliveries.module.css'
import {deliveries} from "@/components/pages/product/wrapper/components/info/description/constants/delivery";
import Delivery from "@/components/pages/product/wrapper/components/info/description/delivery/delivery";

interface props {

}

const Deliveries = (props: props) => {
    return (
        <div className={css.deliveries}>
            {deliveries.map((item) => (
                <Delivery isWhite delivery={item} key={item.title}/>
            ))}
        </div>
    );
};

export default Deliveries;