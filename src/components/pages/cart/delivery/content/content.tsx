import Recipient from "@/components/pages/cart/delivery/content/recipient/recipient";
import css from "./content.module.css"
import Order from "@/components/pages/cart/delivery/content/order/order";
import Obtaining from "@/components/pages/cart/delivery/content/obtaining/obtaining";
interface props{

}
const Content = (props:props) =>{
    return(
        <div className={css.content}>
            <Recipient/>
            <Obtaining/>
            <Order/>
        </div>
    )
}

export default Content