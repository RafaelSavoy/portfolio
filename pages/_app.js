import { SnackbarProvider } from "notistack";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    console.log("Renderizou");
    return (
        <>
            <Head>
                <title>Rafael Savoy</title>
            </Head>
            <SnackbarProvider maxSnack={2}>
                <Component {...pageProps} />
            </SnackbarProvider>
        </>
    );
}

export default MyApp;
