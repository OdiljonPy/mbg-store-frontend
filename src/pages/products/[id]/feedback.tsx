import React from 'react';
import {GetServerSideProps} from "next";
import Head from "next/head";
import {useTranslations} from "next-intl";
import Feedback from "@/components/pages/feedback/feedback";

interface props {

}

const FeedbackPage = (props: props) => {
    const t = useTranslations()
    return (
        <>
            <Head>
                <title>
                    {t('product.sendFeedback')}
                </title>
            </Head>
            <Feedback/>
        </>
    );
};

export default FeedbackPage;

type Props = {}


export const getServerSideProps: GetServerSideProps<Props> = async ({locale}) => {
    return {
        props: {
            messages: require(`@/../messages/${locale}.json`)
        },
    };
};