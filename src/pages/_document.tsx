import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />

          {/* Google Material Icons */}
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />

          {/* Fonts */}
          <link
            rel="preload"
            href="/fonts/SFProDisplay/SFProDisplay-Bold.ttf"
            as="font"
            crossOrigin=""
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body lang="en">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
