import React from 'react';
import css from './address-select.module.css'
import {raleway} from '@/constants/fonts'
import {ConfigProvider, Dropdown, MenuProps} from "antd";
import {useTranslation} from "next-i18next";
import AddressFormModal from "@/layout/components/header/top-header/components/address-form-modal/address-form-modal";

interface props {

}

const AddressSelect = (props: props) => {
    const {t} = useTranslation()

    const items: MenuProps['items'] = [
        {
            label: <AddressFormModal/>,
            key: '1',
        },
    ];

    return (
        <ConfigProvider
         theme={{
             token: {
                 controlItemBgHover: 'transparent'
             }
         }}
        >
            <Dropdown menu={{items}}>
                <button className={`${css.btn} ${raleway.className}`}>
                    <svg className={css.svg} width="18" height="22" viewBox="0 0 18 22" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 0.5C6.81273 0.502481 4.71575 1.37247 3.16911 2.91911C1.62247 4.46575 0.752481 6.56273 0.75 8.75C0.75 15.8094 8.25 21.1409 8.56969 21.3641C8.69579 21.4524 8.84603 21.4998 9 21.4998C9.15397 21.4998 9.30421 21.4524 9.43031 21.3641C9.75 21.1409 17.25 15.8094 17.25 8.75C17.2475 6.56273 16.3775 4.46575 14.8309 2.91911C13.2843 1.37247 11.1873 0.502481 9 0.5ZM9 5.75C9.59334 5.75 10.1734 5.92595 10.6667 6.25559C11.1601 6.58524 11.5446 7.05377 11.7716 7.60195C11.9987 8.15013 12.0581 8.75333 11.9424 9.33527C11.8266 9.91721 11.5409 10.4518 11.1213 10.8713C10.7018 11.2909 10.1672 11.5766 9.58527 11.6924C9.00333 11.8081 8.40013 11.7487 7.85195 11.5216C7.30377 11.2946 6.83524 10.9101 6.50559 10.4167C6.17595 9.92336 6 9.34334 6 8.75C6 7.95435 6.31607 7.19129 6.87868 6.62868C7.44129 6.06607 8.20435 5.75 9 5.75Z"
                            fill="#232323"/>
                    </svg>
                    <span className={css.text}>
                    пр-кт Амира Темура, 23
                </span>
                </button>
            </Dropdown>
        </ConfigProvider>
    );
};

export default AddressSelect;