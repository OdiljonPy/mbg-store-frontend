import css from "@/components/pages/cart/common/delete-promocode/delete-promocode.module.css";
import DoneSVG from "@/components/pages/cart/delivery/totalSum/doneSVG";
import DeleteSVG from "@/components/pages/cart/delivery/totalSum/deleteSVG";
import {deletePromoCode} from "@/slices/basket/basketSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store";

interface props{
    promo_code?:string
}

const DeletePromoCode = ({promo_code='NEW10'}:props) =>{
    const dispatch = useDispatch<AppDispatch>()
    return(
        <div className={css.totalDelete}>
            <div className={css.flex}>
                <DoneSVG/>
                <span className={css.promocode}>{promo_code} <span className={css.black_text}>применено</span></span>
            </div>
            <DeleteSVG onClick={()=> dispatch(deletePromoCode())}/>
        </div>
    )
}

export default DeletePromoCode