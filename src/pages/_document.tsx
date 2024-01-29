import type {DocumentContext} from 'next/document';
import Document, {DocumentProps, Head, Html, Main, NextScript} from 'next/document';
import {createCache, extractStyle, StyleProvider} from '@ant-design/cssinjs';


const MyDocument = ({__NEXT_DATA__}: DocumentProps) => {
    const currentLocale =
        __NEXT_DATA__.locale ?? 'uz'
    return (<Html lang={currentLocale}>
        <Head>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>)
};


MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => (
                <StyleProvider cache={cache}>
                    <App {...props} />
                </StyleProvider>
            ),
        });

    const initialProps = await Document.getInitialProps(ctx);
    const style = extractStyle(cache, true);
    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                <style dangerouslySetInnerHTML={{__html: style}}/>
            </>
        ),
    };
};


export default MyDocument;
