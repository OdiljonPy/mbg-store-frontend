import React from 'react';
import css from './top-header.module.css'
import {Flex} from "antd";
import AddressSelect from "@/layout/components/header/top-header/components/address-select/address-select";
import Nav from "@/layout/components/header/top-header/components/nav/nav";

interface props {

}

const TopHeader = (props: props) => {
    return (
        <div className={css.header}>
            <div className={'container'}>
                <Flex justify={'space-between'} align={'center'} gap={'small'}>
                    <AddressSelect/>
                    <Nav/>
                </Flex>
            </div>
        </div>
    );
};

export default TopHeader;