import React from "react";
import Header from "@/components/dashboard/header";
import Footer from "@/components/dashboard/footer";
import Loader from "@/components/dashboard/loader";

import "@/lib/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={"bg-dark5 w-screen h-screen fixed"}>
        <Loader />
        <div 
          className="h-full w-full flex flex-col items-center justify-between overflow-y-scroll"
          style={{
            background: `linear-gradient(to top right, rgba(39, 39, 39, 0.5), rgba(36, 36, 36, 0.5), rgba(35, 91, 156, 0.2))`
          }}
        >
          <Header />
          <div className="w-sm 3xl:w-xl h-fit pt-24 pb-10">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
