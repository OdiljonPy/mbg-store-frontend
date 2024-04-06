import css from "./adress-cart.module.css"
import DeleteSVG from "@/components/pages/cart/delivery/totalSum/deleteSVG";
import EditIcon
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/icon/edit_icon";
import InfoSVG
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/icon/infoSVG";
import {useEffect, useState} from "react";
import InputRadio
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/input/input_radio";
import {IShipping} from "@/data-types/shipping";
import WarningText from "@/components/pages/cart/common/warning-text/warning-text";
interface props{
    fetchActive: (e:IShipping) => void,
    active:number | undefined
    openDelModal:(id:number,title:string)=>void
    openEditModal:() => void
    shipping:IShipping
}

const AddressCart = ({fetchActive,active,openDelModal,shipping,openEditModal}:props) =>{
    return(
        <div className={`${css.cart} ${shipping.id == active ? css.active :''}`} >
            <div className={css.cart_header}>
               <div className={css.info}>
                   <label className={`${css.custom_radio} ${shipping.id == active ? css.active :''}`}>
                       <input type="radio" checked={active == shipping.id} onClick={() => fetchActive(shipping)} value={shipping.id} name='radio' />
                       <span className={css.custom_radio_button}></span>
                   </label>
                   <div>
                       <p className={css.title}>{shipping.address_name} <span className={`${css.badge} ${active == shipping.id ? css.show : css.hidden}`}>основной</span></p>
                       <p className={css.address}>{shipping.address}</p>
                   </div>
               </div>
                {/*fot action*/}
                <div className={css.action}>
                    <EditIcon onClick={openEditModal} />
                    <DeleteSVG onClick={() => openDelModal(shipping.id,shipping.address_name)}/>
                </div>
            </div>

            {/*warning test*/}
            {/*{*/}
            {/*    shipping.id == active &&*/}
            {/*    <WarningText><p className={css.status_text}>Примерная дата доставки: <span>18 декабря 2023 г.</span> </p></WarningText>*/}
            {/*}*/}

        </div>
    )
}

export default AddressCart