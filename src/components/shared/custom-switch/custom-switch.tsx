import React from 'react';
import {ConfigProvider, Switch} from "antd";

interface props {
checked: boolean
    onChange: (checked: boolean) => void
}

const CustomSwitch = ({checked, onChange}: props) => {
    return (
        <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#60C787'
            }
        }}
        >
            <Switch onChange={onChange} checked={checked}/>
        </ConfigProvider>
    );
};

export default CustomSwitch;