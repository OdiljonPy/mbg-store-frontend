import css from "./index.module.css"
import TruckSVG from "@/components/pages/cart/delivery/content/obtaining/component/icon/truckSVG";
import {raleway} from "@/constants/fonts/fonts";
import StoreSVG from "@/components/pages/cart/delivery/content/obtaining/component/icon/storeSVG";

interface props {
    tab: 'left' | 'right' | string
    changeTab: (e: string) => void
}

const ObtainingChose = ({tab, changeTab}: props) => {
    return (
        <div className={css.obtaining_btn}>
            <div className={`${css.label} ${tab == 'right' ? css.label_right : css.label_left}`}></div>
            <div className={css.choose_btn}>
                <div onClick={(state) => changeTab('left')}>
                    <TruckSVG color={`${tab == 'left' ? '#39B969' : '#A4A4A4'}`}/> <span
                    className={`${css.btn_text} ${raleway.className} ${tab == 'left' ? css.active : ''}`}>Доставка</span>
                </div>
                <div onClick={(state) => changeTab('right')}>
                    <StoreSVG color={`${tab == 'right' ? '#39B969' : '#A4A4A4'}`}/> <span
                    className={`${css.btn_text} ${raleway.className} ${tab == 'right' ? css.active : ''}`}>Самовывоз</span>
                </div>
            </div>
        </div>
    )
}

export default ObtainingChose