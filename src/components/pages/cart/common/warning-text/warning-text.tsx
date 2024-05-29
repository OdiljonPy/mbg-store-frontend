import css from "@/components/pages/cart/common/warning-text/warning-text.module.css";
import InfoSVG from "@/components/pages/cart/common/address-card/components/icon/InfoSVG";
import {ReactElement} from "react";

interface props {
    children:ReactElement
    color?:string,
    type?:'warning' | 'error'
}
const WarningText = ({children,color="#EF9545",type="warning"}:props) =>{
    return(
        <div className={css.status} data-theme={type}>
            <InfoSVG color={color}/>
            <div className={css.status_text} data-theme={type}>{children}</div>
        </div>
    )
}

export default WarningText