import AddressCard from "@/components/pages/cart/common/address-card/address-card";
import css from "@/components/pages/cart/order_placed/order-delivery/content/address/address.module.css"
const Address = () =>{
    return(
        <div className={css.address}>
            <p className={css.title}>Самовывоз с магазина:</p>
            <div className={css.address_item}>
                <AddressCard type={"pick_up"} />
                <AddressCard type={"pick_up"} />
                <AddressCard type={"pick_up"} />
            </div>
        </div>
    )
}

export default Address