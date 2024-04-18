import css from "@/components/pages/cart/order_placed/order-delivery/content/content.module.css"
import Address from "@/components/pages/cart/order_placed/order-pickup/content/address/address";
import OrderItems from "@/components/pages/cart/order_placed/common/order-items/order-items";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import OrderError from "@/components/pages/cart/order_placed/order-pickup/notification/error/OrderError";
interface props{

}
const Content = (props:props) =>{
    const {last_order} = useSelector((state:RootState)=> state.last_order)
    const {order_items} = last_order
    return(
        <div className={css.content}>
            <h2 className={css.title}>Способ получения</h2>
            <Address/>
            <OrderItems products={order_items} totalCountProduct={order_items?.length}/>
        </div>
    )
}

export default Content