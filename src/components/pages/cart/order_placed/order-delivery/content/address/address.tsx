import AddressCard from "@/components/pages/cart/common/address-card/address-card";
import css from "./address.module.css"
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import ShippingCard from "@/components/pages/cart/common/address-card/shipping-card";
const Address = () =>{
    const {shippingList,loading} = useSelector((state:RootState)=> state.shippingList)
    return(
        <div className={css.address}>
            <p className={css.title}>Доставка по адресу:</p>
            <div className={css.address_item}>
                {
                    shippingList.length && shippingList.map((store)=> {
                        if(store.main_address){
                            return <ShippingCard shipping={store} key={store?.id}/>
                        }
                    })
                }

            </div>
        </div>
    )
}

export default Address