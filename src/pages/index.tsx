import {GetStaticProps} from "next";
import Head from "next/head";
import Hero from "@/components/pages/home/hero/hero";
import Sales from "@/components/pages/home/sales/sales";
import Near from "@/components/pages/home/near/near";
import Top from "@/components/pages/home/top/top";
import Popular from "@/components/pages/home/popular/popular";

import {IProductDiscount} from "@/data-types/products/product-discount/product-discount";

interface props{
    message:string,
}
export default function Home(props:props) {
    console.log(props)
    return (
        <>
            <Head>
                <title>MGB store</title>
            </Head>
            <Hero/>
            <Sales/>
            <Popular/>
            <Near/>
            <Top/>
        </>
    )
}


type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({locale}) => {
    return {
        props: {
            messages: require(`@/../messages/${locale}.json`),
        },
    };
};