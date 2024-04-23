import css from './contents.module.css'
import Product from "@/components/pages/cart/contents/product/product";
import CartEmpty from "@/components/pages/cart/common/cart-empty/cart-empty";
import {IProduct} from "@/data-types/products/common";
import {IBasketSlices} from "@/data-types/slices/basket";
import {Badge} from "antd";
import {useTranslations} from "next-intl";

interface props {
    basketSlices: IBasketSlices
}

const Contents = ({basketSlices}: props) => {
    const t = useTranslations()
const {products,totalCountProduct} = basketSlices
    return (
        <div className={css.contents}>
            {!totalCountProduct ? <CartEmpty text={'cart.orders.empty'}/> :
                products.map((product)=> <Product product={product} key={product.id}/>)
            }

            <div className={css.unavailable}>
                <h1 className={css.title}>
                    {t('products.unavailable_product')} <Badge count={basketSlices.totalCountProduct ? basketSlices.totalCountProduct : 0} color={'#FF6C6C'}/>
                </h1>
                <div className={css.contents}>
                    {products?.slice(0,2).map((product)=> <Product isAvailable product={product} key={product.id}/>)}
                </div>
            </div>

        </div>
    );
};

export default Contents;