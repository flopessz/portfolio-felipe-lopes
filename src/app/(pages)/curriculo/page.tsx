import React, {} from "react";
import { Metadata } from "next";
import "@/lib/globals.css";

export const metadata: Metadata = {
  title: "Currículo - PDF",
  description: "Currículo - PDF",
  keywords: "Currículo - PDF",
};

export default function Page() {
  return (
    <>
      <div className="w-full py-4 space-y-4">
        <div className="flex flex-col items-center justify-center pb-4">
          <span className="text-textgray text-4xl font-bold">Currículo | PDF</span>
          <h1 className="text-textgray text-lg font-normal">
            Visualização do meu currículo
          </h1>
        </div>
        <div className="flex flex-col space-y-4">
            <embed
                src={`/curriculo.pdf`}
                type="application/pdf"
                width="100%"
                className="h-[50rem] px-2 pb-2 bg-dark1"
            />
        </div>
      </div>
    </>
  );
}
