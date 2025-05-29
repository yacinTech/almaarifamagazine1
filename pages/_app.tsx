// pages/_app.tsx
import { AppProps } from "next/app";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-DL40NN5MDP"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DL40NN5MDP', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* عرض الصفحة */}
      <Component {...pageProps} />
    </>
  );
}
