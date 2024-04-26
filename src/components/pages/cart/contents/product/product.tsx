import css from './product.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {IProduct} from "@/data-types/products/common";
import Description from "@/components/pages/cart/contents/product/description/description";
import {useState} from "react";
import Actions from "@/components/pages/cart/contents/product/actions/actions";
import Price from "@/components/pages/cart/contents/product/description/price/price";
import Link from "next/link";
import Button from "@/components/shared/button";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store";
import {removeFromNotAvailable} from "@/slices/basket/basketSlice";
import {useTranslations} from "next-intl";
import {useRouter} from "next/router";

interface props {
    product: IProduct
    isAvailable?:boolean
}

const Product = ({product,isAvailable = false}: props) => {
    const t = useTranslations()

    const {push} = useRouter()

    const dispatch = useDispatch<AppDispatch>()
    const { images, name,id} = product
    const [count, setCount] = useState<number>(product.count ? product.count : 0)

    const actionButton = (id:number,name:string)=>{
        dispatch(removeFromNotAvailable(id))
        push(`/products?search=${name}&sort=popular`).then(r => true)
    }

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
                   <Button variant={"tertiary"} onClick={()=> actionButton(id,name)}>{t('products.some_product')}</Button>
               </div>
           </div>}
       </div>
    );
};

export default Product;