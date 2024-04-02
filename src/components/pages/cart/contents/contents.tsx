import css from './contents.module.css'
import Product from "@/components/pages/cart/contents/product/product";
import {product, productWithoutDiscount} from "@/constants/product/product";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

interface props {

}

const Contents = (props: props) => {
    const basketItems = useSelector((state:RootState)=>state.basket.products)
    console.log(basketItems,"basket")
    return (
        <div className={css.contents}>
            {
                basketItems.map((product)=> <Product product={product}/>)
            }

        </div>
    );
};

export default Contents;