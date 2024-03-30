import React, {useEffect, useState} from 'react';
import {useModal} from "@/hooks/use-modal";
import {useTranslations} from 'next-intl';
import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import {Drawer} from "antd";
import Body from "@/components/pages/products/filters/mobile/stores/body/body";
import {storesList} from "@/constants/stores/stores";
import Option from "@/components/pages/products/filters/mobile/stores/option/option";
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import {fetchStories} from "@/slices/all_store/StoriesSlices";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";


interface props {

}

const Stores = (props: props) => {
    const dispatch = useDispatch<AppDispatch>()
    const {stories,loading } = useSelector((state:RootState) => state.all_stories)
    const t = useTranslations()
    const {open, onOpen, onClose} = useModal(true)
    const {watch, setValue} = useFormContext<IFilters>()
    const stores: string[] | undefined = watch('stores')

    const [storeList,setStoreList] = useState<ICustomCheckbox[]>(
        [
            {
                id: 1,
                title: 'Зеленая лавка',
                count: 2132
            }
        ]
    )

    useEffect(() => {
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
            setStoreList(fetchStoreList)
        })
    }, []);
    const onReset = () => {
        setValue('stores', undefined)
    }
    return (
        <>
            <div className={css.item}>
                <TopBar onReset={stores?.length ? onReset : undefined} title={t('header.stores')} onOpen={onOpen}/>
                <Body storeList={storeList}/>
            </div>
            <Drawer classNames={{
                body: 'custom-body'
            }} open={open} closeIcon={false} placement={'bottom'} height={'100%'} onClose={onClose}>
                <DrawerHeader options={{
                    title: t('header.stores'),
                    onClose,
                    onReset,
                    count: stores?.length ?? 0
                }}/>
                <div className={css.inner}>
                    {loading ? '...loading' : storeList.map((store) => (
                        <Option item={store} key={store.id}/>
                    ))}
                </div>
            </Drawer>
        </>
    );
};

export default Stores;