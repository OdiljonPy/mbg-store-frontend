import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from "next-intl";
import Content from "@/components/pages/cart/delivery/content/content";
import TotalSum from "@/components/pages/cart/delivery/totalSum/totalSum";
import {FormProvider, useForm} from "react-hook-form";
import { IPostOrder} from "@/data-types/order/order";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {createOrder} from "@/slices/order/ordersSlice";
import {useRouter} from "next/router";
import {useToasts} from "react-toast-notifications";
import {clearBasket, deletePromoCode} from "@/slices/basket/basketSlice";
import OrderError from "@/components/pages/cart/order_placed/order-pickup/notification/error/OrderError";

interface props {

}

const Wrapper = (props: props) => {
    const t = useTranslations()
    const dispatch = useDispatch<AppDispatch>()
    const {error} = useSelector((state:RootState) => state.orders)
    const methods = useForm<IPostOrder>()
    const router = useRouter()
    const {addToast} = useToasts()


    const submitOrder = (values:IPostOrder)=>{
        if(values.type == 'D' && !values.delivery_address) {
                 return addToast(t('cart.info_enter_address'),{
                    appearance: 'info',
                    autoDismiss: true,
                })
        }
        dispatch(createOrder(values))
            .unwrap()
            .then((res)=>{
                if(res.ok){
                    dispatch(deletePromoCode())
                    dispatch(clearBasket())
                    if(router.query?.type){
                        if(router.query.type === 'delivery')  router.push("/cart/order-delivery").then(r => true)
                        else router.push("/cart/order-pickup").then(r => true)
                    }
                    else{
                        router.push("/cart/order-delivery").then(r => true)
                    }
                }
                else throw new Error("error")
            }).catch((err)=>{
             return addToast(t('cart.orders.error'),{
                appearance: 'error',
                autoDismiss: true,
            })
        })
    }

    // if(error){
    //     return <OrderError/>
    // }

    return (
        <section className={css.cart}>
            <div className={'container'}>
                <Breadcrumbs items={[
                    {
                        path: '/',
                        label: t('header.home')
                    },
                    {
                        path: '/cart',
                        label: t('header.basket')
                    },
                    {
                        path: '/cart/delivery',
                        label: t('header.delivery')
                    }
                ]}/>

                <FormProvider {...methods}>
                    <form className={css.wrapper} onSubmit={methods.handleSubmit(submitOrder)}>
                        <Content form={methods} />
                        <TotalSum />
                    </form>
                </FormProvider>

            </div>
        </section>
    );
};

export default Wrapper;