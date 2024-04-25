import React, {useEffect} from 'react';
import css from './information-list.module.css'
import {informationItems} from "@/constants/about/information";
import InformationItem from "@/components/pages/about/information/information-item/information-item";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchStatistics} from "@/slices/base/statistics/statisticsSlices";

interface Props {

}


const InformationList = (props: Props) => {
    const {loading,statistic} = useSelector((state:RootState)=> state.statistics)

    const dispatch = useDispatch<AppDispatch>()


    informationItems[0].count = statistic?.product_count
    informationItems[1].count = statistic?.stores_count
    informationItems[2].count = statistic?.orders_count

    useEffect(() => {
        dispatch(fetchStatistics())
    }, [dispatch]);
    return (
        <div className={css.list}>
            {informationItems.map((item) => (
                <InformationItem item={item} key={item.title} loading={loading}/>
            ))}
        </div>
    );
};

export default InformationList;