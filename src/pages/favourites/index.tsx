import {GetStaticProps} from "next";
import Head from "next/head";
import {useTranslations} from "next-intl";
import dynamic from 'next/dynamic';

const ClientSideWrapper = dynamic(() => import('@/components/pages/favourites/wrapper'), {
    ssr: false,
});

const Index = () => {
    const t = useTranslations()
    return (
        <>
            <Head>
                <title>
                    {t('header.favourites')}
                </title>
            </Head>
            <ClientSideWrapper/>
        </>
    );
};

export default Index;

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({locale}) => {
    return {
        props: {
            messages: require(`@/../messages/${locale}.json`)
        },
    };
};