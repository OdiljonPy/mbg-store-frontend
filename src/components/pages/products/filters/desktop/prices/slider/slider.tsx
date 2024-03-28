import React from 'react';
import {ConfigProvider, Slider} from "antd";

interface props {
    priceRange: number[]
    onChange: (value: number[]) => void
    onChangeComplete: (value: number[]) => void
}

const PriceSlider = ({onChangeComplete, onChange, priceRange}: props) => {
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
            <Slider min={1000} max={10000000} defaultValue={priceRange} tooltip={{
                open: false
            }} value={priceRange} onChange={onChange} onChangeComplete={onChangeComplete} range/>
        </ConfigProvider>
    );
};

export default PriceSlider;