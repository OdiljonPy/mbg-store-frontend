import React from 'react';
import css from "./style.module.css"
import InfoSVG
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/icon/infoSVG";
import StoreSVG from "@/components/pages/cart/delivery/content/obtaining/component/icon/storeSVG";
import EditSVG from "@/components/pages/cart/delivery/content/icon/editSVG";
import ClockSVG from "@/components/pages/cart/delivery/content/obtaining/component/card/icon/ClockSVG";

interface Props {
    data: {
        id: number,
        value: number,
        title: string,
        address: string,
        status: string,
        date: string
    },
}

function AddressCart({data}: Props) {
    return (
        <div className={css.cart}>
            <div className={css.cart_header}>
                <div className={css.info}>
                    <StoreSVG color={"#39B969"}/>
                    <div>
                        <p className={css.title}>{data.title}</p>
                        <p className={css.address}>{data.address}</p>
                        <div className={css.timeBox}>
                            <ClockSVG />
                            <p className={css.time}>{data.date}</p>
                        </div>
                    </div>
                </div>
                <div className={css.action}>
                    <EditSVG/>
                </div>
            </div>
            <div className={css.status}>
                <InfoSVG/>
                <p className={css.status_text}>Товар(ы) доступны для получения <span>в течение 2х часов</span> с момента размещения заказа</p>
            </div>
        </div>
    );
}

export default AddressCart;