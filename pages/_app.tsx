import { useEffect } from "react";
import Script from "next/script";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", "G-BG1PE488V6");
    }
  }, []);

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BG1PE488V6"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
