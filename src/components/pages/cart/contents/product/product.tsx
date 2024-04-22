import css from './product.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {IProduct} from "@/data-types/products/common";
import Description from "@/components/pages/cart/contents/product/description/description";
import {useState} from "react";
import Actions from "@/components/pages/cart/contents/product/actions/actions";
import Price from "@/components/pages/cart/contents/product/description/price/price";
import Link from "next/link";
import Button from "@/components/shared/button";

interface props {
    product: IProduct
    isAvailable?:boolean
}

const Product = ({product,isAvailable = false}: props) => {
    const { images, name,id} = product
    const [count, setCount] = useState<number>(product.count ? product.count : 0)

    return (
       <div className={css.product_cart}>
           <div className={css.product}>
               <Link href={`/products/${id}`} className={css.img} >
                   <ResponsiveImage src={images[0]?.image} alt={name}/>
               </Link>
               <div className={css.info}>
                   <Description count={count} product={product}/>
                   <div className={css.desktop_action}>
                    <Actions isAvailable={isAvailable} count={count} setCount={setCount}  product={product}/>
                   </div>
                   <div className={css.price_mobile}>
                       <Price discount={product.discount} discount_price={product.discount_price} price={product.price} count={count}/>
                   </div>
               </div>
           </div>
           <div className={css.mobile_action}>
               <Actions isAvailable={isAvailable} count={count} setCount={setCount}  product={product}/>
           </div>
           {isAvailable &&  <div className={css.isAvailable}>
               <div className={css.available_action}>
                   <Button variant={"tertiary"}>Похожие товары</Button>
               </div>
           </div>}
       </div>
    );
};

export default Product;