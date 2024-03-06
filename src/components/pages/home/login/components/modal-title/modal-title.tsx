import css from "./modal-title.module.css"
import {raleway} from '@/constants/fonts/fonts'
interface props {
    children: string
}
function ModalTitle({children}:props) {
    return (
        <h3 className={`${css.title} ${raleway.className}`}>{children}</h3>
    );
}

export default ModalTitle;