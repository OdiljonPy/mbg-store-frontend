import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from "next-intl";
import {Badge} from "antd";
import Favourites from "@/components/pages/cart/favourites/favourites";
import Content from "@/components/pages/cart/delivery/content/content";
import TotalSum from "@/components/pages/cart/delivery/totalSum/totalSum";
import {FormProvider, useForm} from "react-hook-form";
import {IOrder, IPostOrder} from "@/data-types/order/order";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store";
import {createOrder} from "@/slices/order/ordersSlice";
import {useRouter} from "next/router";

interface props {

}

const Wrapper = (props: props) => {
    const t = useTranslations()
    const dispatch = useDispatch<AppDispatch>()
    const methods = useForm<IPostOrder>()
    const router = useRouter()
    const submitOrder = (values:IPostOrder)=>{
        console.log(values,'val')
        dispatch(createOrder(values))
            .unwrap()
            .then((res)=>{
                if(res.ok){
                    if(router.query.type === 'delivery')  router.push("/cart/order-delivery").then(r => true)
                    else router.push("/cart/order-pickup").then(r => true)
                }
                else {
                    alert("Erorr")
                }
            })
    }
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