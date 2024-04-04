import Heading from "@/components/pages/cart/common/heading/heading";
import EditSVG from "@/components/pages/cart/delivery/content/icon/editSVG";
import Link from "next/link";
import OrderCart from "@/components/pages/cart/common/order-card";
import css from "./order.module.css"
import { productWithoutCount} from "@/constants/product/product";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {IProduct} from "@/data-types/products/common";
interface props{
    products : IProduct[]
    totalCountProduct:number
}
const Order = ({products,totalCountProduct}:props) =>{
    return(
        <div className={css.order}>
            <Heading title="Товары в заказе" index={3} isBadge={true} badeCount={totalCountProduct}>
                <Link href={'/cart'}>
                      <EditSVG/>
                </Link>
            </Heading>
            <div className={css.order_cart}>
                {
                    products.map((product)=>   <OrderCart product={product} key={product.id}/>)
                }
            </div>
        </div>
    )
}

export default Order