import css from "./address.module.css"
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import ShippingCard from "@/components/pages/cart/common/address-card/shipping-card";
import {IDeliveryAddress} from "@/data-types/address/delivery-address";

interface props{
    address:IDeliveryAddress | null
}
const Address = ({address}:props) =>{
    return(
        <div className={css.address}>
            <p className={css.title}>Доставка по адресу:</p>
            <div className={css.address_item}>
                {
                    address ?  <ShippingCard shipping={address} key={address?.id}/>:''
                }

            </div>
        </div>
    )
}

export default Address