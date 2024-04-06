import AddressCard from "@/components/pages/cart/common/address-card/address-card";
import css from "@/components/pages/cart/order_placed/order-delivery/content/address/address.module.css"
import {useSelector} from "react-redux";
import {RootState} from "@/store";
const Address = () =>{
    const storeList = useSelector((state:RootState)=> state.basket.store_list)
    return(
        <div className={css.address}>
            <p className={css.title}>Самовывоз с магазина:</p>
            <div className={css.address_item}>
                {storeList.length && storeList.map((store)=><AddressCard type={"pick_up"} store={store} key={store?.id}/>)}
            </div>
        </div>
    )
}

export default Address