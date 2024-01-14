import React, {PropsWithChildren} from 'react';
import Head from "next/head";
import Header from "@/layout/components/header/header";
import css from './layout.module.css'
import Footer from "@/layout/components/footer/footer";
import {raleway} from "@/constants/fonts/fonts";
import Loader from "@/shared/loader/loader";



const Layout = ({children}: PropsWithChildren) => {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={`${css.content} ${raleway.className}`}>
                <Header/>
                <main className={css.main}>
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default Layout;