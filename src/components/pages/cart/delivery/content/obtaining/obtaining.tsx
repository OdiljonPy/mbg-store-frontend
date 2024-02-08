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
    const [containerHeight,setContainerHeight] = useState(20)
    function changeContainerHeight(e:number){
        console.log(e)
        setContainerHeight((prevState)=> e)
    }
    function changeTab(e:string){
        setTab((prevState)=> prevState = e)
    }
    const containerStyle = {
        // minHeight: `${containerHeight}px`,
        height : `${containerHeight}px`,
        transition : 'all 0.7s '
    }
    return(
        <div className={css.obtaining}>
            <Heading title="Товары в заказе" index={2} />
            <div>
                <ObtainingChose tab={tab} changeTab={changeTab}  />
                <div className={css.change_container} style={containerStyle} >
                    {tab == 'left' ? <ObtainingDelivery changeContainerHeight={changeContainerHeight}/> : <ObtainingCome changeContainerHeight={changeContainerHeight}/>}
                </div>
            </div>
        </div>
    )
}

export default Obtaining