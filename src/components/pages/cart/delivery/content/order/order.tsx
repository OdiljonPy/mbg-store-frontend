import Heading from "@/components/pages/cart/delivery/content/heading/heading";
import EditSVG from "@/components/pages/cart/delivery/content/icon/editSVG";
import Link from "next/link";
import OrderCart from "@/components/pages/cart/delivery/content/order/orderCart";
import css from "./order.module.css"
import {product, productWithoutDiscount} from "@/constants/product/product";
const Order = () =>{
    return(
        <div className={css.order}>
            <Heading title="Товары в заказе" index={3} isBadge={true}>
                <Link href={'/cart'}>
                <EditSVG/>
                </Link>
            </Heading>
            <div className={css.order_cart}>
                <OrderCart product={product}/>
                <OrderCart product={product}/>
                <OrderCart product={productWithoutDiscount}/>
                <OrderCart product={product}/>
                <OrderCart product={product}/>
            </div>
        </div>
    )
}

export default Order