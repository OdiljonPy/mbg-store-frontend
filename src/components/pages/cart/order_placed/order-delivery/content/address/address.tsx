import AddressCard from "@/components/pages/cart/common/address-card/address-card";
import css from "./address.module.css"
const Address = () =>{
    return(
        <div className={css.address}>
            <p className={css.title}>Доставка по адресу:</p>
            <div className={css.address_item}>
                <AddressCard type={"delivery"}/>
                <AddressCard type={"delivery"}/>
            </div>
        </div>
    )
}

export default Address