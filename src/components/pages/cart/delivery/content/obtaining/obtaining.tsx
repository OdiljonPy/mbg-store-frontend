import css from "./obtaining.module.css"
import Heading from "@/components/pages/cart/delivery/content/heading/heading";
import ObtainingChose from "@/components/pages/cart/delivery/content/obtaining/component/obtainingChose";
import {useState} from "react";
import ObtainingDelivery from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery";
import ObtainingCome from "@/components/pages/cart/delivery/content/obtaining/component/obtainingCome";

interface props{

}

const Obtaining = (props:props) =>{
    const [tab,setTab] = useState('left')
    function changeTab(e:string){
        setTab((prevState)=> prevState = e)
    }
    return(
        <div className={css.obtaining}>
            <Heading title="Товары в заказе" index={2} />
            <div>
                <ObtainingChose tab={tab} changeTab={changeTab}  />
                {tab == 'left' ? <ObtainingDelivery/> : <ObtainingCome/>}
            </div>
        </div>
    )
}

export default Obtaining