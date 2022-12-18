import { useState } from "react";

import { Html, Head, Main, NextScript } from "next/document";

import AboutDialog from "../components/aboutDialog";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Document() {
  let [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);

  return (
    <Html>
      <Head>
        <title>Design Navigator</title>
        <meta
          name="description"
          content="A tool that helps you choose your path to become a great designer, and a library of 100+ books, podcasts, courses, and other resources to help you navigate."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-black text-white w-screen max-w-[100vw] overflow-x-clip">
        <div className=" flex flex-col justify-between items-center min-h-screen">
          <Header setIsAboutDialogOpen={setIsAboutDialogOpen}></Header>

          <AboutDialog
            isAboutDialogOpen={isAboutDialogOpen}
            setIsAboutDialogOpen={setIsAboutDialogOpen}
          ></AboutDialog>
          
          <Main className="" />

          <Footer></Footer>
        </div>

        <NextScript />
      </body>
    </Html>
  );
}
