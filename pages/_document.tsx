// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head />
        <meta name="google-adsense-account" content="ca-pub-4295602876718090" />
        <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4295602876718090"
            crossOrigin="anonymous"
          />

        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WDJF95QL"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
