import Heading from "@/components/pages/cart/common/heading/heading";
import OrderCart from "@/components/pages/cart/common/order-card";
import css from "./order-items.module.css"
import {IOrderItem} from "@/data-types/order/order";

interface props{
    products:IOrderItem[]
    totalCountProduct:number
}
const OrderItems = ({products,totalCountProduct}:props) =>{
    return(
        <div className={css.order}>
            <Heading title="Товары в заказе" isBadge={true} badeCount={totalCountProduct}/>
            <div className={css.order_cart}>
                {products.map((product)=><OrderCart orderQuantity={product.quantity} product={product?.product} key={product.id} /> )}
            </div>
        </div>
    )
}

export default OrderItems