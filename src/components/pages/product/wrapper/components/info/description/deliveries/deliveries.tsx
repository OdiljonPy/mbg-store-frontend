import React from 'react';
import css from './deliveries.module.css'
import {deliveries} from "@/components/pages/product/wrapper/components/info/description/constants/delivery";
import Delivery from "@/components/pages/product/wrapper/components/info/description/delivery/delivery";

interface props {
    pickup?:boolean,
    free_shipping?:boolean
}

const Deliveries = ({pickup,free_shipping}: props) => {
    return (
        <div className={css.wrapper}>
            {
                free_shipping ? <Delivery delivery={deliveries[0]}/>:''
            }
            {
                pickup ? <Delivery delivery={deliveries[1]} /> : ''
            }

        </div>
    );
};

export default Deliveries;