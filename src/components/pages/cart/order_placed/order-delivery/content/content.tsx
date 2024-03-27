import css from "./content.module.css"
import Order from "@/components/pages/cart/delivery/content/order/order";
import Address from "@/components/pages/cart/order_placed/order-delivery/content/address/address";
interface props{

}
const Content = (props:props) =>{
    return(
        <div className={css.content}>
            <h2 className={css.title}>Способ получения</h2>
            <Address/>
            <Order/>
        </div>
    )
}

export default Content