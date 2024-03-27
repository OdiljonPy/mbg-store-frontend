import css from "./obtaining.module.css"
import Heading from "@/components/pages/cart/common/heading/heading";
import ObtainingChose from "@/components/pages/cart/delivery/content/obtaining/component/obtainingChose";
import {useState} from "react";
import ObtainingDelivery from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery";
import ObtainingCome from "@/components/pages/cart/delivery/content/obtaining/component/obtainingCome";
import EditSVG from "@/components/pages/cart/delivery/content/icon/editSVG";
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";
import AddressCard from "@/components/pages/cart/common/address-card/address-card";

interface props {

}

const Obtaining = (props: props) => {
    const {push,query} = useRouter()
    const pathname: string = usePathname()
    const [tab, setTab] = useState('left')
    const [containerHeight, setContainerHeight] = useState(20)
    const [type, setType] = useState('')
    const [deliveryId, setDeliveryId] = useState(0)
    const [isChoose, setIsChoose] = useState(false)

    function changeContainerHeight(e: number) {
        setContainerHeight((prevState) => e)
    }

    function changeTab(e: string) {
        setTab((prevState) => prevState = e)

        if(tab === 'right'){
            push({
                pathname,
                query:{
                    ...query,
                    type:'delivery'
                },
            })
        }
        else{
            push({
                pathname,
                query:{
                    ...query,
                    type:'pickup'
                }
            })
        }
    }

    const containerStyle = {
        height: `${containerHeight}px`,
        transition: 'all 0.7s '
    }

    // active address obtaining delivery
    const activeAddress = (id: number) => {
        console.log(id, "active address id")
        setDeliveryId(id)
        setType('delivery')
        setIsChoose(true)
    }
    // end active address

    const backAddress = () => {
        setIsChoose(false)
    }

    return (
        <div className={css.obtaining}>
            <Heading title="Товары в заказе" index={2}>
                {isChoose && <EditSVG onClick={backAddress}/>}
            </Heading>
            <div>
                {!isChoose && <div>
                    <ObtainingChose tab={tab} changeTab={changeTab}/>

                    <div className={css.change_container} style={containerStyle}>
                        {tab == 'left' ? <ObtainingDelivery changeContainerHeight={changeContainerHeight}
                                                            activeAddress={activeAddress}/> :
                            <ObtainingCome changeContainerHeight={changeContainerHeight}/>}
                    </div>
                </div>}
                {type && <div className={css.status_cart}>
                    <AddressCard type={"delivery"}/>
                    <AddressCard type={"pick_up"}/>
                </div>}
            </div>

        </div>
    )
}

export default Obtaining