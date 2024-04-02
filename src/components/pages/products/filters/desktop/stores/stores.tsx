import React, {useEffect, useState} from 'react';
import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import {useTranslations} from 'next-intl';
import css from './stores.module.css'
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import Store from "@/components/pages/products/filters/desktop/stores/store/store";
import Search from "@/components/pages/products/filters/desktop/stores/search/search";

import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchStories} from "@/slices/all_store/StoriesSlices";
import {IStores} from "@/data-types/stores/stores";

interface props {

}


const Stores = (props: props) => {
    const t = useTranslations()
    const {stories,loading } = useSelector((state:RootState) => state.all_stories)
    const dispatch = useDispatch<AppDispatch>()
    const [storesList,setStoresList] = useState<ICustomCheckbox[]>([
        {
            id: 1,
            title: 'Зеленая лавка',
            count: 2132
        },

    ])
    useEffect(() => {
        // dispatch(fetchStories())
        const fetchStoreList:ICustomCheckbox[] = []
        dispatch(fetchStories()).then<any>((res:any)=>{
            if(res.payload.ok){
                res.payload?.result?.map((store:any) =>{
                    fetchStoreList.push({
                        id:store.id,
                        title:store.brand_name,
                        count:store.customers_count
                    })
                })
            }
            setStoresList(fetchStoreList)
        })
    }, []);

    // useEffect(() =>{
    //     const fetchStoreList:ICustomCheckbox[] = []
    //     stories.map((store:any)=>{
    //         fetchStoreList.push({
    //             id:store.id,
    //             title:store.brand_name,
    //             count:store.customers_count
    //         })
    //     })
    //     setStoresList(fetchStoreList)
    //     console.log(stories,"stories",loading)
    // },[loading])

    return (
        <FilterCollapse title={t('header.stores')}>
            <div className={css.stores}>
                <Search/>
                {storesList.map((item) => (
                    <Store item={item} key={item.id}/>
                ))}
            </div>
        </FilterCollapse>
    );
};

export default Stores;