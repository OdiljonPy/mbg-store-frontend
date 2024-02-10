import css from "./adress-cart.module.css"
import DeleteSVG from "@/components/pages/cart/delivery/totalSum/deleteSVG";
import EditIcon
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/icon/edit_icon";
import InfoSVG
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/icon/infoSVG";
import {useEffect, useState} from "react";
import InputRadio
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/input/input_radio";
interface props{
    fetchActive: (e:number) => void,
    active?:number
    openDelModal:(id:number,title:string)=>void
    openEditModal:() => void
    data:{
        id:number,
        value:number,
        title:string,
        address:string,
        status:string
    }
}

const AddressCart = ({fetchActive,active,openDelModal,data,openEditModal}:props) =>{
    const [checked,setChecked] = useState(false)


    useEffect(()=>{
        if(active == data.value) setChecked(true)
        else setChecked(false)
    },[active])

    return(
        <div className={`${css.cart} ${data.value == active ? css.active :''}`} >
            <div className={css.cart_header}>
               <div className={css.info}>
                   <label className={`${css.custom_radio} ${data.value == active ? css.active :''}`}>
                       <input type="radio" checked={checked} onClick={() => fetchActive(data.value)} value={data.value} name='radio' />
                       <span className={css.custom_radio_button}></span>
                   </label>
                   <div>
                       <p className={css.title}>{data.title} <span className={`${css.badge} ${active == data.value ? css.show : css.hidden}`}>основной</span></p>
                       <p className={css.address}>{data.address}</p>
                   </div>
               </div>
                <div className={css.action}>
                    <EditIcon onClick={openEditModal} />
                    <DeleteSVG onClick={() => openDelModal(data.id,data.title)}/>
                </div>
            </div>
            <div className={`${css.status} ${active === data.value ? css.active : css.block}`}>
                <InfoSVG/>
                <p className={css.status_text}>Примерная дата доставки: <span>18 декабря 2023 г.</span> </p>
            </div>
        </div>
    )
}

export default AddressCart