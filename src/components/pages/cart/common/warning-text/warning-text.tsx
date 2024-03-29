import css from "@/components/pages/cart/common/warning-text/warning-text.module.css";
import InfoSVG from "@/components/pages/cart/common/address-card/components/icon/InfoSVG";
import {ReactElement} from "react";

interface props {
    children:ReactElement
}
const WarningText = ({children}:props) =>{
    return(
        <div className={css.status}>
            <InfoSVG/>
            <div className={css.status_text}>{children}</div>
        </div>
    )
}

export default WarningText