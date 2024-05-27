import css from "./no_data.module.css"
import Image from "next/image";
import {raleway} from "@/constants/fonts/fonts";
import {useTranslations} from "next-intl";

const NoData = ()=>{
    const t = useTranslations('filters.no_data')
    return (
        <div className={css.no_data}>
            <div className={css.image_wrapper}>
                <Image
                    className={css.image}
                    src='/images/account/favorites/favorites-empty.png'
                    alt='empty-favorites'
                    width={200}
                    height={180}
                />
            </div>
            <div>
                <p className={`${css.title} ${raleway.className}`}>{t('title')}</p>
                <p className={`${css.description} ${raleway.className}`}>{t('description')}</p>
            </div>
        </div>
    )
}

export default NoData