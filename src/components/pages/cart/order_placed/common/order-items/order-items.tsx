import Heading from "@/components/pages/cart/common/heading/heading";
import OrderCart from "@/components/pages/cart/common/order-card";
import css from "./order-items.module.css"
import {IProduct} from "@/data-types/products/common";

interface props{
    products:IProduct[]
    totalCountProduct:number
}
const OrderItems = ({products,totalCountProduct}:props) =>{
    return(
        <div className={css.order}>
            <Heading title="Товары в заказе" isBadge={true} badeCount={totalCountProduct}/>
            <div className={css.order_cart}>
                {products.map((product)=><OrderCart product={product} key={product.id} /> )}
            </div>
        </div>
    )
}

export default OrderItems