import React, {useState} from 'react';
import {ConfigProvider, Slider} from "antd";
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";

interface props {

}

const SliderPrices = (props: props) => {

    const {watch, setValue} = useFormContext<IFilters>()
    const prices = watch('prices')
    const parsedPrice = prices ? prices.split(',')?.map((item) => Number(item)) : [1000, 50000]

    const onChange = (value: number[]) => {
        const [start, end] = value
        setValue('prices', `${start},${end}`)
    };



    return (
        <ConfigProvider theme={{
            components: {
                Slider: {
                    trackBg: '#60C787',
                    trackHoverBg: '#60C787',
                    handleColor: '#60C787',
                    handleActiveColor: '#60C787',
                    dotActiveBorderColor: '#60C787',
                    colorPrimaryBorderHover: '#60C787',
                    controlSize: 6,
                    handleSize: 12,
                    handleSizeHover: 14
                }
            }
        }}>
            <Slider min={1000} max={100000000} defaultValue={parsedPrice} tooltip={{
                open: false
            }} value={parsedPrice} onChange={onChange}  range/>
        </ConfigProvider>
    );
};

export default SliderPrices;