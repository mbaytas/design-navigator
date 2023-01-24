import { DefaultSeo } from "next-seo";

import "../styles/globals.css";

import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo
        title={undefined}
        titleTemplate="%s | Design Navigator"
        defaultTitle="Design Navigator"
        description="A tool that helps you choose your path to become a great designer, and a library of 100+ books, podcasts, courses, and other resources to help you navigate."
        openGraph={{
          type: "website",
          locale: "en",
          url: "https://navigator.designdisciplin.com/",
          siteName: "Design Navigator",
          images: [
            {
              url: "https://navigator.designdisciplin.com/card_default.png",
              width: 1920,
              height: 1080,
              alt: "Design Navigator",
              type: "image/png",
            },
          ],
          siteName: "Design Navigator",
        }}
        twitter={{
          handle: "@designdisciplin",
          site: "@designdisciplin",
          cardType: "summary_large_image",
        }}
      />

      <Component {...pageProps} />
    </Layout>
  );
}
MyApp;
