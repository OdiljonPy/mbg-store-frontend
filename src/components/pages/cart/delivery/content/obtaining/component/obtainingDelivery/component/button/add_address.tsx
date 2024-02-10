import css from "./index.module.css"
import PlusSVG from "@/components/pages/cart/delivery/content/obtaining/component/icon/plusSVG";
import React from "react";
import {useTranslations} from "next-intl";
interface props{
    onOpen : () => void
}
const AddAddress = ({onOpen}:props) =>{
    const t = useTranslations()
    return(
        <button onClick={onOpen}  className={`${css.btn} ${css.address_btn}`}>
            <PlusSVG/>
            <span className={css.text}>
                    {t('address.add')}
                </span>
        </button>
    )
}

export default AddAddress