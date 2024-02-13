import css from './product.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {IProduct} from "@/data-types/products/products";
import Description from "@/components/pages/cart/contents/product/description/description";
import {useState} from "react";
import Actions from "@/components/pages/cart/contents/product/actions/actions";
import Price from "@/components/pages/cart/contents/product/description/price/price";

interface props {
    product: IProduct
}

const Product = ({product}: props) => {
    const { img, title} = product

    const [count, setCount] = useState<number>(0)



    return (
       <div>
           <div className={css.product}>
               <div className={css.img}>
                   <ResponsiveImage src={img} alt={title}/>
               </div>
               <div className={css.info}>
                   <Description count={count} product={product}/>
                   <div className={css.desktop_action}>
                    <Actions count={count} setCount={setCount}/>
                   </div>
                   <div className={css.price_mobile}>
                       <Price discount_price={product.discount_price} price={product.price} count={count}/>
                   </div>
               </div>
           </div>
           <div className={css.mobile_action}>
               <Actions count={count} setCount={setCount}/>
           </div>
       </div>
    );
};

export default Product;