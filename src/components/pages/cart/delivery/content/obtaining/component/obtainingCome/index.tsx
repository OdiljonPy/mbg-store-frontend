import {useEffect, useRef, useState} from "react";
import AddressItem
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingCome/component/AddressItem/AddressItem";

import css from "./index.module.css"
import ObtainingComeModal
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingCome/modal/ObtainingComeModal";

import AddressCard from "@/components/pages/cart/common/address-card/address-card";

interface props {
    changeContainerHeight: (e: number) => void
}

const ObtainingCome = ({changeContainerHeight}: props) => {
    const cardRef = useRef<any>(null)
    const [open, setOpen] = useState<boolean>(false)
    const [chooseMarket, setChooseMarket] = useState<string>("")
    const [openAddress, setOpenAddress] = useState<boolean>(false)

    const addressList = [
        {
            id: 1,
            value: 1,
            title: "Зеленая лавка “Сквер”",
            address: "г. Ташкент, проспект Навои, д-27",
            status: "",
            date: "8:00-23:00"
        },
        {
            id: 2,
            value: 2,
            title: "Фермерская базарка “Сквер”",
            address: "г. Ташкент, проспект Навои, д-27",
            status: "",
            date: "8:00-23:00"
        }
    ]

    useEffect(() => {
        changeContainerHeight(cardRef?.current?.scrollHeight)
    }, [openAddress])

    const onClose = () => {
        setOpen(false)
    }

    const openFormModal = (name: string) => {
        setOpen(true)
        setChooseMarket(name)
    }

    const handleOpenAddress = () => {
        setOpenAddress(true)
    }

    return (
        <div ref={cardRef}>
            {
                <div className={css.carts}>
                    {addressList.map((item) => <AddressCard type={'pick_up'} key={item.id}/>)}
                </div>
            }
        </div>
    )
}


// addressni kiritidagan holi uchun

// {
//     !openAddress ? <div className={css.carts}>
//         {addressList.map((item) => <AddressCart  key={item.id} data={item}/>)}
//     </div> : <div className={css.obtainingCome}>
//         <AddressItem openModal={openFormModal} title={"Зеленая лавка"}/>
//         <AddressItem openModal={openFormModal} title={"Фермерская базарка"}/>
//     </div>
// }
// <ObtainingComeModal  openAddress={handleOpenAddress} nameMarket={chooseMarket} open={open}
//                      onClose={onClose}/>

export default ObtainingCome