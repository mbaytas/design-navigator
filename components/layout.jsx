import { useState } from "react";

import Head from "next/head";
import Script from "next/script";

import { MotionConfig } from "framer-motion";

import AboutDialog from "./aboutDialog";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  let [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);

  return (
    <MotionConfig transition={{ duration: 0.6 }}>
      <Head>
        <title>Design Navigator</title>
        <meta
          name="description"
          content="A tool that helps you choose your path to become a great designer, and a library of 100+ books, podcasts, courses, and other resources to help you navigate."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-white min-h-screen w-screen max-w-[100vw] overflow-x-clip flex flex-col justify-between gap-12">
        <Header
          isAboutDialogOpen={isAboutDialogOpen}
          setIsAboutDialogOpen={setIsAboutDialogOpen}
        ></Header>

        <AboutDialog
          isAboutDialogOpen={isAboutDialogOpen}
          setIsAboutDialogOpen={setIsAboutDialogOpen}
        />

        <div className="ghost h-12"></div>

        <main className="px-3 relative">{children}</main>

        <Footer />
      </div>

      <Script
        data-domain="designdisciplin.com"
        src="https://plausible.io/js/plausible.js"
      ></Script>
    </MotionConfig>
  );
}
