import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from "next-intl";
import {Badge} from "antd";
import Favourites from "@/components/pages/cart/favourites/favourites";
import Content from "@/components/pages/cart/delivery/content/content";
import TotalSum from "@/components/pages/cart/delivery/totalSum/totalSum";
import {FormProvider, useForm} from "react-hook-form";
import {IOrder, IPostOrder} from "@/data-types/order/order";

interface props {

}

const Wrapper = (props: props) => {
    const t = useTranslations()
    const methods = useForm<IPostOrder>()

    const createOrder = (values:IPostOrder)=>{
        console.log(values,"submit")
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
                    <form className={css.wrapper} onSubmit={methods.handleSubmit(createOrder)}>
                        <Content form={methods} />
                        <TotalSum />
                    </form>
                </FormProvider>

            </div>
        </section>
    );
};

export default Wrapper;