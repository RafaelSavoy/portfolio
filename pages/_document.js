import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import React from "react";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <link rel="preload" href="https://fonts.googleapis.com" />
                    <link
                        rel="preload"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Poppins&family=Roboto&display=swap"
                        rel="stylesheet"
                    />
                    <meta
                        name="description"
                        content="RafaelSavoy Desenvolvedor Web. Portólio profissional."
                    />

                    <meta name="application-name" content="Portfolio" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
