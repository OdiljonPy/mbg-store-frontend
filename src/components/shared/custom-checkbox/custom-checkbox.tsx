import React from 'react';
import {Checkbox, ConfigProvider} from "antd";
import css from './custom-checkbox.module.css'
import {ICustomCheckbox, ISlideOptions} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import {raleway} from "@/constants/fonts/fonts";

interface props {
    options: ISlideOptions
    item: ICustomCheckbox
}

const CustomCheckbox = ({options, item}: props) => {
    const {id, title, count} = item
    const {checked, disabled, onChange} = options
    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#60C787',
            }
        }}>
            <Checkbox onChange={onChange} rootClassName={css.wrapper} checked={checked}
                      disabled={disabled}
                      value={id}>
                <span className={`${css.inner} ${raleway.className}`}>
                 <span className={css.title}>
                        {title}
                 </span>
                    <span className={css.text}>
                    {count}
                </span>
                </span>
            </Checkbox>
        </ConfigProvider>
    );
};

export default CustomCheckbox;