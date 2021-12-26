// import App from "next/app";
import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import theme from "common/theme";
import Navigation from "components/Navigation";
import Head from "next/head";
import GlobalStyle from "../common/GlobalStyle";

const Container = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 100vh;

    .component {
        flex-grow: 1;
        padding: 20px 0 20px 0;
        margin-top: 48px;

        @media ${({ theme }) => theme.screen.mobile} {
            margin-top: 48px;
        }

        .section {
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
        }
    }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <Navigation />
                <div className="component">
                    <Component {...pageProps} />
                </div>
            </Container>
            <Head>
                <title>organize</title>
            </Head>
        </ThemeProvider>
    );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
