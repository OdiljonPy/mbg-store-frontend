import React from 'react';
import {GetServerSideProps} from "next";

interface props {

}

const Feedback = (props: props) => {
    return (
        <>
            Feedback
        </>
    );
};

export default Feedback;

type Props  = {

}




export const getServerSideProps: GetServerSideProps<Props> = async ({locale}) => {
    return {
        props: {
            messages: require(`@/../messages/${locale}.json`)
        },
    };
};