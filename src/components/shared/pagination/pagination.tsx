import css from "./pagination.module.css"
import Button from "@/components/shared/button";
import React from "react";
import {useTranslations} from "next-intl";
import {priceFormatter} from "@/utils/price-formatter/price-formatter";


interface props{
    content?:boolean
    page:number,
    total:number,
    offset:number,
    setOffset:(page:number)=> void
}
const Pagination = ({content=false,page,offset,total,setOffset} :props) =>{
    const t = useTranslations()
    return(
        <div className={css.pagination}>
            {content &&  <div className={css.pagination_content}>
                {offset}-{page} из {priceFormatter(total)} товаров
            </div>}
            <div className={css.pagination_btn}>
                <Button onClick={()=> setOffset(offset + 1)} variant={"secondary"}>{t('support.show_less')}</Button>
            </div>
        </div>
    )
}

export default Pagination