import '@/styles/globals.css'
import '@/styles/roots.css'
import type {AppProps} from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

import NextNProgress from 'nextjs-progressbar';
import Layout from "@/layout/layout";
import { IntlProvider} from 'next-intl';
import {useRouter} from "next/router";
import {YMaps} from "@pbe/react-yandex-maps";
import {Providers} from "@/provider";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function App({Component, pageProps}: AppPropsWithLayout) {
    const {locale} = useRouter()
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        <Providers>
        <IntlProvider
            locale={locale!}
            messages={pageProps.messages}
            onError={() => {
            }}
            timeZone={'Asia/Tashkent'}
        >
            <YMaps enterprise query={{lang: 'ru_RU', apikey: process.env.NEXT_PUBLIC_YANDEX_KEY, mode: 'debug', suggest_apikey: process.env.NEXT_PUBLIC_SUGGEST_KEY}}>
                        <NextNProgress color={`#39B969`}
                                       startPosition={0.3}
                                       stopDelayMs={200}
                                       height={8}
                                       showOnShallow={true}/>
                {
                    Component.getLayout ? getLayout(
                        <Component {...pageProps} />
                    ) : <Layout>
                        <Component {...pageProps} />
                    </Layout>
                }
            </YMaps>

        </IntlProvider>
        </Providers>
    )

}


export default App

