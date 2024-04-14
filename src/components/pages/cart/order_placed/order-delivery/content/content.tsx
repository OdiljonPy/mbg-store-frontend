import css from "./content.module.css"
import Address from "@/components/pages/cart/order_placed/order-delivery/content/address/address";
import OrderItems from "@/components/pages/cart/order_placed/common/order-items/order-items";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
interface props{

}
const Content = (props:props) =>{
    const {products,totalCountProduct} = useSelector((state:RootState) => state.basket)
    const {last_order} = useSelector((state:RootState)=> state.last_order)
    const {delivery_address} = last_order
    return(
        <div className={css.content}>
            <h2 className={css.title}>Способ получения</h2>
            <Address address={delivery_address}/>
            <OrderItems products={products} totalCountProduct={totalCountProduct}/>
        </div>
    )
}

export default Content