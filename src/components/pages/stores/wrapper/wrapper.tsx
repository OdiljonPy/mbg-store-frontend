import React, {useEffect} from 'react';
import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from 'next-intl';
import {Badge} from "antd";
import Letters from "@/components/pages/stores/letters/letters";
import StoreLetter from "@/components/pages/stores/store-letter/store-letter";
import {stores} from "@/constants/stores/stores";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store";
import {fetchStories} from "@/slices/all_store/StoriesSlices";

interface props {

}

const Wrapper = (props: props) => {
    const t = useTranslations()
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchStories())
    }, []);
    return (
        <section className={css.stores}>
            <div className={'container'}>
                <Breadcrumbs items={[
                    {
                        path: '/',
                        label: t('header.home')
                    },
                    {
                        path: '/stores',
                        label: t('header.stores')
                    }
                ]}/>
                <h1 className={css.title}>
                    {t('header.stores')}
                    <Badge count={10890} overflowCount={1000000} size={'default'}
                           style={{backgroundColor: '#39B969', borderColor: 'transparent'}}/>
                </h1>
                <Letters/>
                {stores.map((store_letter) => (
                    <StoreLetter storeLetter={store_letter} key={store_letter.id}/>
                ))}
            </div>
        </section>
    );
};

export default Wrapper;