import css from "@/components/pages/cart/order_placed/order-delivery/content/content.module.css"
import Address from "@/components/pages/cart/order_placed/order-pickup/content/address/address";
import OrderItems from "@/components/pages/cart/order_placed/common/order-items/order-items";
interface props{

}
const Content = (props:props) =>{
    return(
        <div className={css.content}>
            <h2 className={css.title}>Способ получения</h2>
            <Address/>
            <OrderItems/>
        </div>
    )
}

export default Content