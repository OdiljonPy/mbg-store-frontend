import css from './price.module.css'
import {priceFormatter} from "@/utils/price-formatter/price-formatter";

interface props {
    price: number
    discount_price: number | undefined
    count: number
}

const Price = ({price, discount_price, count}: props) => {
    const currentPrice = discount_price ? discount_price : price
    return (
        <div className={css.prices}>
            <p className={`${css.price} ${discount_price ? css.discount: ''}`}>
                {priceFormatter(currentPrice, true)}
            </p>
            <p className={`${css.actualPrice} ${discount_price ? css.show : ''}`}>
                {priceFormatter(price, true)}
            </p>
            <p className={`${css.pricePerItem} ${count > 1 ? css.show: ''}`}>
                {priceFormatter(currentPrice, true)}/ед
            </p>
        </div>
    );
};

export default Price;