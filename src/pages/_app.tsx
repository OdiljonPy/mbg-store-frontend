import '@/styles/globals.css'
import '@/styles/roots.css'
import type {AppProps} from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import Layout from "@/layout/layout";
import {NextIntlClientProvider, IntlProvider} from 'next-intl';
import {useRouter} from "next/router";
import {YMaps} from "@pbe/react-yandex-maps";
import {Providers} from "@/provider";

function App({Component, pageProps}: AppProps) {
    const {locale} = useRouter()
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
                <Layout>
                    <NextNProgress color={`#39B969`}
                                   startPosition={0.3}
                                   stopDelayMs={200}
                                   height={8}
                                   showOnShallow={true}/>
                    <Component {...pageProps} />
                </Layout>
            </YMaps>

        </IntlProvider>
        </Providers>
    )

}


export default App

