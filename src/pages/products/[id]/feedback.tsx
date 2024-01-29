import React from 'react';
import {GetServerSideProps, GetStaticPaths, GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

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
            ...(await serverSideTranslations(locale ?? "uz", ["common"])),
        },
    };
};