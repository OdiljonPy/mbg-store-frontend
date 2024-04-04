import css from './price.module.css'
import {priceFormatter} from "@/utils/price-formatter/price-formatter";

interface props {
    price: number
    discount_price: number
    count: number
    discount:number
}

const Price = ({price, discount_price, count,discount}: props) => {
    const currentPrice = discount ? price - discount_price : price
    return (
        <div className={css.prices}>
            <p className={`${css.price} ${discount ? css.discount: ''} `}>
                {priceFormatter(currentPrice*count, true)}
            </p>
            <p className={`${css.actualPrice} ${discount ? css.show : ''}`}>
                {priceFormatter(price * count, true)}
            </p>
            <p className={`${css.pricePerItem} ${count > 1 ? css.show: ''}`}>
                {priceFormatter(price, true)}/ед
            </p>
        </div>
    );
};

export default Price;