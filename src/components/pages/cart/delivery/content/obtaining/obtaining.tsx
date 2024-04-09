import css from "./obtaining.module.css"
import Heading from "@/components/pages/cart/common/heading/heading";
import ObtainingChose from "@/components/pages/cart/delivery/content/obtaining/component/obtainingChose";
import { useState} from "react";
import ObtainingDelivery from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery";
import ObtainingCome from "@/components/pages/cart/delivery/content/obtaining/component/obtainingCome";
import EditSVG from "@/components/pages/cart/delivery/content/icon/editSVG";
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";
import ShippingCard from "@/components/pages/cart/common/address-card/shipping-card";
import {IShipping} from "@/data-types/shipping";

interface props {

}

export type ITab = 'delivery' | 'pickup'

const Obtaining = (props: props) => {
    const {push,query} = useRouter()
    const pathname: string = usePathname()
    const [tab, setTab] = useState<ITab>('delivery')
    const [containerHeight, setContainerHeight] = useState(20)
    const [isChoose, setIsChoose] = useState(false)
    const [activeAdd,setActiveAdd] = useState<IShipping>()

    function changeContainerHeight(e: number) {
        setContainerHeight((prevState) => e)
    }

    function changeTab(tab: ITab) {
        setTab(tab)
        if(tab === 'delivery'){
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
    const saveActiveAddress = (address : IShipping) => {
        setActiveAdd(address)
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
                        {tab == 'delivery' ? <ObtainingDelivery changeContainerHeight={changeContainerHeight}
                                                            saveActiveAddress={saveActiveAddress}/> :
                            <ObtainingCome changeContainerHeight={changeContainerHeight}/>}
                    </div>
                </div>}
                {(isChoose && activeAdd) &&<div className={css.status_cart}>
                    <ShippingCard shipping={activeAdd}/>
                </div> }
            </div>

        </div>
    )
}

export default Obtaining