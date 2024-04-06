import css from "./index.module.css"
import React, {useEffect, useRef, useState} from "react";
import FormModal from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/modal/address_modal/form-modal";
import AddressCart
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/address-cart";
import AddAddress
    from "@/components/pages/cart/common/button/add_address";
import SendButton
    from "@/components/pages/cart/common/button/send_button";
import DeleteModal
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/modal/delete_modal/delete_modal";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchShippingList} from "@/slices/shipping/shippingSlice";
import ShippingCard from "@/components/pages/cart/common/address-card/shipping-card";
import {IShipping} from "@/data-types/shipping";

interface props{
    changeContainerHeight : (e:number)=> void
    saveActiveAddress : (e:IShipping) => void
    activeAddress?:IShipping
}


const ObtainingDelivery = ({changeContainerHeight,saveActiveAddress,activeAddress}:props) =>{
    const dispatch = useDispatch<AppDispatch>()
    const {shippingList,loading} = useSelector((state:RootState)=> state.shippingList)
    console.log(shippingList,"shipping list")
    const cardRef = useRef<any>(null)
    const [open, setOpen] = useState<boolean>(false)
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
    const [activeAddressCart,setActiveAddressCart] = useState<IShipping>()

    const fetchActive = (address:IShipping) =>{
        setActiveAddressCart(address)
    }

    const onOpen = () => {
        document.body.style.overflow = 'hidden'
        setOpen(true)
    }

    const onClose = () => {
        document.body.style.overflow = 'visible'
        setOpen(false)
    }
    // delete modal

    const [deleteModalData,setDeleteModalData] = useState({id:0,title:''})
    const onOpenDeleteModal = (id:number,title:string) => {
        document.body.style.overflow = 'hidden'
        setOpenDeleteModal(true)
        const modalData = {
            id,
            title
        }
        setDeleteModalData((prevState)=> prevState = modalData)
    }

    const closeDeleteModal = () => {
        document.body.style.overflow = 'visible'
        setOpenDeleteModal(false)
    }
    const deleteAddress =  (id:number) =>{
        console.log(id,"delete id")
    }




    useEffect(()=>{
        changeContainerHeight(cardRef?.current?.scrollHeight)
        const activeAddress = shippingList.find((add)=> add.main_address === true)
        if(activeAddress){
            setActiveAddressCart(activeAddress)
        }
    },[shippingList])

    useEffect(() => {
        dispatch(fetchShippingList())
    }, [dispatch]);
    const fakeShipping = {
        id:1,
        address_name: "Home",
        address: "string",
        entrance: 21,
        floor: 10,
        apartment: 2,
        latitude: "string",
        longitude: "string",
        main_address: true
    }
    const saveAddress = () =>{
        saveActiveAddress(activeAddressCart || fakeShipping)
    }
    return(
        <div ref={cardRef}>
            <div className={css.carts}>
                {
                    shippingList.map((shipping,index) =>{
                        return <AddressCart key={shipping.id}  shipping={shipping} fetchActive={fetchActive} active={activeAddressCart?.id} openDelModal={onOpenDeleteModal} openEditModal={onOpen}/>
                    })
                }
            </div>
            <div className={css.action_btn}>
                <AddAddress onOpen={onOpen}/>

                {
                    shippingList.length && <SendButton title={'approve'} onClick={() => saveAddress()}/>
                }

            </div>
            <FormModal open={open} onClose={onClose} />
            <DeleteModal open={openDeleteModal} onClose={closeDeleteModal} deleteAddress={deleteAddress} data={deleteModalData}/>
        </div>
    )
}

export default ObtainingDelivery









