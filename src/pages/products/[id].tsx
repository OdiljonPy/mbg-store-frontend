import React from 'react';
import {GetServerSideProps} from "next";
import Wrapper from "@/components/pages/product/wrapper/wrapper";

interface props {

}

type Props = {};





const Id = (props: props) => {
    return (
        <>
            <Wrapper/>
        </>
    );
};

export default Id;

export const getServerSideProps: GetServerSideProps<Props> = async ({locale}) => {
    return {
        props: {
            messages: require(`@/../messages/${locale}.json`)
        },
    };
};
