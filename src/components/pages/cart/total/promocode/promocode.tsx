import css from './promocode.module.css'
import {useForm} from "react-hook-form";
import {IPromocodeForm} from "@/components/pages/cart/total/data-types/promocode";
import {useTranslations} from "next-intl";
import inputCss from '@/styles/input.module.css'

interface props {

}

const Promocode = (props: props) => {

    const t = useTranslations()
    const {register, handleSubmit} = useForm<IPromocodeForm>()


    const onAcceptPromo = (values: IPromocodeForm) => {

    }

    return (
        <form onSubmit={handleSubmit(onAcceptPromo)} className={css.promocode}>
            <div className={css.inputWrapper}>
                <input placeholder={t('cart.promo_code')} className={inputCss.input} {...register('code', {
                    required: {
                        value: true,
                        message: t('errors.required')
                    }
                })}/>
            </div>
            <button className={css.btn}>
                {t('cart.accept')}
            </button>
        </form>
    );
};

export default Promocode;