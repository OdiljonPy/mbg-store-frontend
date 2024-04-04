import css from './contents.module.css'
import Product from "@/components/pages/cart/contents/product/product";
import CartEmpty from "@/components/pages/cart/common/cart-empty/cart-empty";
import {IProduct} from "@/data-types/products/common";
import {IBasketSlices} from "@/data-types/slices/basket";

interface props {
    basketSlices: IBasketSlices
}

const Contents = ({basketSlices}: props) => {
const {products,totalCountProduct} = basketSlices
    return (
        <div className={css.contents}>
            {!totalCountProduct ? <CartEmpty/> :
                products.map((product)=> <Product basket={basketSlices} product={product} key={product.id}/>)
            }

        </div>
    );
};

export default Contents;