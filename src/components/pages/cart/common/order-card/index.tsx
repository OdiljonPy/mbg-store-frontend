
import css from "./cart.module.css"
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {useTranslations} from "next-intl";
import Price from "@/components/pages/cart/common/order-card/components/price/index";
import {IProduct} from "@/data-types/products/common";
interface props{
    product:IProduct
}
const OrderCart = ({product}:props) =>{
    const t = useTranslations()
    const { images, name,amount_type,store,price,discount_price,discount,count} = product
    return(
        <div className={css.product}>
            <div className={css.img}>
                <ResponsiveImage src={images[0]?.image} alt={name}/>
            </div>
            <div className={css.info}>
                <div className={css.info_left}>
                    <div>
                        <p className={css.title}>{name}</p>
                        <p className={css.weigh}>{amount_type}</p>
                    </div>
                    <p className={css.seller}>
                        <span>{t('product.seller')}:</span>
                        <span className={css.seller_value}>{store?.brand_name}</span>
                    </p>
                </div>
                <div className={css.info_right}>
                        <Price discount={discount} price={price} discount_price={discount_price} count={count ? count : 1}/>
                    <p className={css.count}>кол-во: <span className={css.count_value}>{count}</span></p>
                </div>
            </div>
        </div>
    )
}

export default OrderCart