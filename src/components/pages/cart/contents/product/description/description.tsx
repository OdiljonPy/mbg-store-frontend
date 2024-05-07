import css from './description.module.css'
import {IProduct} from "@/data-types/products/common";
import Seller from "@/components/pages/product/wrapper/components/info/description/seller/seller";
import Price from "@/components/pages/cart/contents/product/description/price/price";

interface props {
    product: IProduct
    count: number
}

const Description = ({product, count}: props) => {
    const {name, weight, store, discount_price, price,discount} = product
    return (
        <div className={css.info}>
            <div className={css.mainInfo}>
                <h3 className={css.name}>
                    {name}
                </h3>
                <p className={css.weight}>
                    {weight}
                </p>
                <Seller store={store}/>
            </div>
            <div className={css.price_desctop}>
                <Price discount={discount} discount_price={discount_price} price={price} count={count}/>
            </div>
        </div>
    );
};

export default Description;