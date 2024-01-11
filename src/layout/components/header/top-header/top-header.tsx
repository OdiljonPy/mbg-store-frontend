import React from 'react';
import css from './top-header.module.css'
import {Flex} from "antd";
import AddressSelect from "@/layout/components/header/top-header/components/address-select/address-select";

interface props {

}

const TopHeader = (props: props) => {
    return (
        <Flex justify={'start'} gap={'small'}>
            <AddressSelect/>
        </Flex>
    );
};

export default TopHeader;