import css from "./adress-cart.module.css"
import {Radio,ConfigProvider} from "antd"
import DeleteSVG from "@/components/pages/cart/delivery/totalSum/deleteSVG";
import EditIcon
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/icon/edit_icon";
import InfoSVG
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/icon/infoSVG";
import {useEffect, useState} from "react";
import InputRadio
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/input/input_radio";
interface props{
    value:number,
    fetchActive: (e:number) => void,
    active?:number
}

const AddressCart = ({value,fetchActive,active}:props) =>{
    const [checked,setChecked] = useState(false)

    useEffect(()=>{
        if(active == value) setChecked(true)
        else setChecked(false)
    },[active])

    return(
        <div className={`${css.cart} ${value == active ? css.active :''}`} >
            <div className={css.cart_header}>
               <div className={css.info}>
                   <label className={`${css.custom_radio} ${value == active ? css.active :''}`}>
                       <input type="radio" checked={checked} onClick={() => fetchActive(value)} value={value} name='radio' />
                       <span className={css.custom_radio_button}></span>
                   </label>
                   <div>
                       <p className={css.title}>Мой дом <span className={`${css.badge} ${active == value ? css.show : css.hidden}`}>основной</span></p>
                       <p className={css.address}>г. Ташкент, проспект Амира Темура, д-23, кв-20 </p>
                   </div>
               </div>
                <div className={css.action}>
                    <EditIcon/>
                    <DeleteSVG/>
                </div>
            </div>
            <div className={`${css.status} ${active === value ? css.active : css.block}`}>
                <InfoSVG/>
                <p className={css.status_text}>Примерная дата доставки: <span>18 декабря 2023 г.</span> </p>
            </div>
        </div>
    )
}

export default AddressCart