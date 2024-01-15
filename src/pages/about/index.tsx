import React from 'react';
import css from './index.module.css'
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";
import {useTranslation} from "next-i18next";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import Information from "@/components/pages/about/information/information";
import Partners from "@/components/pages/about/partners/partners";
import Faq from "@/components/pages/about/faq/faq";

interface props {

}

const Index = (props: props) => {
    const {t} = useTranslation()
    return (
        <>
            <Head>
                <title>
                    {t('header.about')}
                </title>
            </Head>
            <section className={css.about}>
                <div className={'container'}>
                    <Breadcrumbs items={[
                        {
                            path: '/',
                            label: t('header.home')
                        },
                        {
                            path: '/about',
                            label: t('header.about')
                        }
                    ]}/>
                </div>

                <Information/>
                <Partners/>
                <Faq/>
            </section>
        </>
    );
};


type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({locale}) => {


    return {
        props: {
            ...(await serverSideTranslations(locale ?? "uz", ["common"])),
        },
    };
};
export default Index;