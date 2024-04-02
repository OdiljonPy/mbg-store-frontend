import css from './product.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {IProduct} from "@/data-types/products/common";
import Description from "@/components/pages/cart/contents/product/description/description";
import {useState} from "react";
import Actions from "@/components/pages/cart/contents/product/actions/actions";
import Price from "@/components/pages/cart/contents/product/description/price/price";
import {IBasketSlices} from "@/data-types/slices/basket";

interface props {
    product: IProduct
    basket:IBasketSlices
}

const Product = ({product}: props) => {
    const { images, name,id} = product
    const [count, setCount] = useState<number>(product.count ? product.count : 0)

    return (
       <div>
           <div className={css.product}>
               <div className={css.img}>
                   <ResponsiveImage src={images[0]?.image} alt={name}/>
               </div>
               <div className={css.info}>
                   <Description count={count} product={product}/>
                   <div className={css.desktop_action}>
                    <Actions count={count} setCount={setCount}  product={product}/>
                   </div>
                   <div className={css.price_mobile}>
                       <Price discount={product.discount} discount_price={product.discount_price} price={product.price} count={count}/>
                   </div>
               </div>
           </div>
           <div className={css.mobile_action}>
               <Actions count={count} setCount={setCount}  product={product}/>
           </div>
       </div>
    );
};

export default Product;