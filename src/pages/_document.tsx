import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

    render() {

        return(

            <Html>

                <Head>

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap" rel="stylesheet" />
                    <meta name="theme-color" content="#228855" />

                </Head>

                <body>

                    <Main />

                    <NextScript />

                </body>

            </Html>

        )

    }

}