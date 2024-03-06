import React from 'react';
import css from "./style.module.css"
import {raleway} from "@/constants/fonts/fonts";
import MapSVG from "@/components/pages/cart/delivery/content/obtaining/component/icon/mapSVG";
import ListSVG from "@/components/pages/cart/delivery/content/obtaining/component/icon/listSVG";

interface props {
    tab: 'left' | 'right' | string
    changeTab: (e: string) => void
}
function ChooseMapOrList({tab, changeTab}: props) {
    return (
        <div className={css.chooseMapOrList}>
            <div className={`${css.label} ${tab == 'right' ? css.label_right : css.label_left}`}></div>
            <div className={css.choose_btn}>
                <div onClick={(state) => changeTab('left')}>
                    <MapSVG color={`${tab == 'left' ? '#39B969' : '#A4A4A4'}`}/> <span
                    className={`${css.btn_text} ${raleway.className} ${tab == 'left' ? css.active : ''}`}>Карта</span>
                </div>
                <div onClick={(state) => changeTab('right')}>
                    <ListSVG color={`${tab == 'right' ? '#39B969' : '#A4A4A4'}`}/> <span
                    className={`${css.btn_text} ${raleway.className} ${tab == 'right' ? css.active : ''}`}>Список</span>
                </div>
            </div>
        </div>
    )
}

export default ChooseMapOrList;