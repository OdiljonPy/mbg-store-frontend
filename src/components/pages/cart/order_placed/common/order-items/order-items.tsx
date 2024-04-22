import Heading from "@/components/pages/cart/common/heading/heading";
import OrderCart from "@/components/pages/cart/common/order-card";
import css from "./order-items.module.css"
import {IOrderItem} from "@/data-types/order/order";
import OrderedItemSkeleton from "@/components/pages/account/orders/order/ordered-item-list/skeleton/skeleton";

interface props{
    products:IOrderItem[]
    totalCountProduct:number
    loading:boolean
}
const OrderItems = ({products,totalCountProduct,loading}:props) =>{
    return(
        <div className={css.order}>
            <Heading title="Товары в заказе" isBadge={true} badeCount={totalCountProduct}/>
            <div className={css.order_cart}>
                {
                    loading ?
                        <>
                            {Array.from({ length: 3 }).map((_, index) => (
                                <OrderedItemSkeleton key={index} />
                            ))}
                        </>
                        :
                        products?.map((product)=><OrderCart orderQuantity={product.quantity} product={product?.product} key={product.id} /> )}
            </div>
        </div>
    )
}

export default OrderItems