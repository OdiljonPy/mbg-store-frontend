import Recipient from "@/components/pages/cart/delivery/content/recipient/recipient";
import css from "./content.module.css"
import Order from "@/components/pages/cart/delivery/content/order/order";
import Obtaining from "@/components/pages/cart/delivery/content/obtaining/obtaining";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
interface props{

}
const Content = (props:props) =>{
    const {products,totalCountProduct} = useSelector((state:RootState) => state.basket)
    return(
        <div className={css.content}>
            <Recipient/>
            <Obtaining/>
            {
                totalCountProduct ? <Order products={products} totalCountProduct={totalCountProduct} />:''
            }
        </div>
    )
}

export default Content