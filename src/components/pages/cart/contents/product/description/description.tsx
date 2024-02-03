import css from './description.module.css'
import {IProduct} from "@/data-types/products/products";
import Seller from "@/components/pages/product/wrapper/components/info/description/seller/seller";
import Price from "@/components/pages/cart/contents/product/description/price/price";

interface props {
    product: IProduct
    count: number
}

const Description = ({product, count}: props) => {
    const {title, weight, seller, discount_price, price} = product
    return (
        <div className={css.info}>
            <div className={css.mainInfo}>
                <h3 className={css.name}>
                    {title}
                </h3>
                <p className={css.weight}>
                    {weight}
                </p>
                <Seller seller={seller}/>
            </div>
            <Price discount_price={discount_price} price={price} count={count}/>
        </div>
    );
};

export default Description;