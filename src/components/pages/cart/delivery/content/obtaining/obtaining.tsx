import css from "./obtaining.module.css"
import Heading from "@/components/pages/cart/delivery/content/heading/heading";
import ObtainingChose from "@/components/pages/cart/delivery/content/obtaining/component/obtainingChose";
import {useEffect, useRef, useState} from "react";
import ObtainingDelivery from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery";
import ObtainingCome from "@/components/pages/cart/delivery/content/obtaining/component/obtainingCome";
import StatusCard from "@/components/pages/cart/delivery/content/obtaining/component/card/status_card";
import {ref} from "@vue/reactivity";
import EditSVG from "@/components/pages/cart/delivery/content/icon/editSVG";

interface props{

}

const Obtaining = (props:props) =>{
    const cart = useRef<any>(null)
    const [tab,setTab] = useState('left')
    const [containerHeight,setContainerHeight] = useState(20)
    const [type,setType] = useState('')
    const [deliveryId,setDeliveryId] = useState(0)
    const [isChoose,setIsChoose] = useState(false)

    function changeContainerHeight(e:number){
        setContainerHeight((prevState)=> e)
    }
    function changeTab(e:string){
        setTab((prevState)=> prevState = e)
    }
    const containerStyle = {
        height : `${containerHeight}px`,
        transition : 'all 0.7s '
    }

    // active address obtaining delivery
        const activeAddress = (id:number) =>{
        console.log(id,"active address id")
            setDeliveryId(id)
            setType('delivery')
            setIsChoose(true)
        }
    // end active address

    const backAddress = () =>{
        setIsChoose(false)
    }

    return(
        <div className={css.obtaining}>
            <Heading title="Товары в заказе" index={2}>
                {isChoose && <EditSVG onClick={backAddress}/>}
            </Heading>
            <div ref={cart}>
                {!isChoose && <div>
                    <ObtainingChose tab={tab} changeTab={changeTab}  />
                    <div className={css.change_container} style={containerStyle} >
                        {tab == 'left' ? <ObtainingDelivery changeContainerHeight={changeContainerHeight} activeAddress={activeAddress} /> : <ObtainingCome changeContainerHeight={changeContainerHeight}/>}
                    </div>
                </div>}
                {type && <div className={css.status_cart}>
                    <StatusCard type='delivery'/>
                    <StatusCard type='pick_up'/>
                </div>}
            </div>

        </div>
    )
}

export default Obtaining