import css from "./pagination.module.css"
import Button from "@/components/shared/button";
import React from "react";
import {useTranslations} from "next-intl";
import {priceFormatter} from "@/utils/price-formatter/price-formatter";


interface props{
    content?:boolean
    total:number,
    offset:number,
    limit:number
    setOffset:(page:number)=> void
}
const Pagination = ({content=false,offset,total,setOffset,limit} :props) =>{
    const t = useTranslations()
    const handlePagination = () =>{
        if(offset < total){
            setOffset(offset + limit)
        }
    }
    return(
        <div className={css.pagination}>
            {content &&  <div className={css.pagination_content}>
                1-{offset < total ? offset : total} из {priceFormatter(total)} товаров
            </div>}
            <div className={css.pagination_btn}>
                <Button onClick={()=> handlePagination()} variant={"secondary"} disabled={offset >=total}>{t('products.show_more')}</Button>
            </div>
        </div>
    )
}

export default Pagination