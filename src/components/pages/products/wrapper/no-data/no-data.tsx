import css from "./no_data.module.css"
import Image from "next/image";
import {raleway} from "@/constants/fonts/fonts";

const NoData = ()=>{
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
                <p className={`${css.title} ${raleway.className}`}>Мы не нашли подходящих товаров</p>
                <p className={`${css.description} ${raleway.className}`}>Попробуйте изменить фильтры или сбросить их</p>
            </div>
        </div>
    )
}

export default NoData