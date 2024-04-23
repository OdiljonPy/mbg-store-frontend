import React, {useEffect} from 'react';
import css from './intro.module.css'
import Info from "@/components/pages/store/intro/info/info";
import Deliveries from "@/components/pages/store/intro/deliveries/deliveries";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchStoreSingle} from "@/slices/all_store/StoriesSlices";

interface props {

}

const Intro = ({}: props) => {
    const {query:{id}} = useRouter()
    const {loading,single_store} = useSelector((state:RootState)=> state.all_stories)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchStoreSingle(id))
    }, [dispatch]);

    return (
        <section className={css.info}>
            <Info store={single_store} loading={loading}/>
            <Deliveries/>
        </section>
    );
};

export default Intro;