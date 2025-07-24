import React from "react";
import Header from "@/components/dashboard/header";
import Footer from "@/components/dashboard/footer";
import Loader from "@/components/dashboard/loader";
import { Metadata } from "next";
import "@/lib/globals.css";

export const metadata: Metadata = {
  title: "Portfólio Felipe Lopes",
  description: "Portfólio",
  keywords: "Portfólio",
};

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
            background: `linear-gradient(to top right, rgba(20, 20, 20, 0.5), rgba(25, 25, 25, 0.5), rgba(35, 91, 156, 0.2))`,
          }}
        >
          <Header />
          <div className="w-c xl:w-a 3xl:w-b h-fit pt-24 lg:pt-10 pb-10">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
