import css from "./index.module.css"
import TruckSVG from "@/components/pages/cart/delivery/content/obtaining/component/icon/truckSVG";
import {raleway} from "@/constants/fonts/fonts";
import StoreSVG from "@/components/pages/cart/delivery/content/obtaining/component/icon/storeSVG";
import {ITab} from "@/components/pages/cart/delivery/content/obtaining/obtaining";
import {useTranslations} from "next-intl";

interface props {
    tab: ITab
    changeTab: (e: ITab) => void
}

const ObtainingChose = ({tab, changeTab}: props) => {
    const t = useTranslations()
    return (
        <div className={css.obtaining_btn}>
            <div className={`${css.label} ${tab == 'pickup' ? css.label_right : css.label_left}`}></div>
            <div className={css.choose_btn}>
                <div onClick={(state) => changeTab('delivery')}>
                    <TruckSVG color={`${tab == 'delivery' ? '#39B969' : '#A4A4A4'}`}/> <span
                    className={`${css.btn_text} ${raleway.className} ${tab == 'delivery' ? css.active : ''}`}>{t('header.delivery')}</span>
                </div>
                <div onClick={(state) => changeTab('pickup')}>
                    <StoreSVG color={`${tab == 'pickup' ? '#39B969' : '#A4A4A4'}`}/> <span
                    className={`${css.btn_text} ${raleway.className} ${tab == 'pickup' ? css.active : ''}`}>{t('filters.delivery.self')}</span>
                </div>
            </div>
        </div>
    )
}

export default ObtainingChose