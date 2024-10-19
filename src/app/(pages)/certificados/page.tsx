import React, {} from "react";
import { Metadata } from "next";
import "@/lib/globals.css";

export const metadata: Metadata = {
  title: "Certificados",
  description: "Certificados",
  keywords: "Certificados",
};

const lista_certificados = [
  {
    titulo: "Introdução á IOT - Cisco Networking Academy",
    pasta: "Introdução-IOT-certificate",
  },
  {
    titulo: "Introdução á Segurança Cibernética - Cisco Networking Academy",
    pasta: "Introdução-a-Cib-certificate",
  },
  {
    titulo: "Inteligência artificial e machine learning - Ecossistema Ânima",
    pasta: "Inteligencia-artificial-machine-learning",
  },
  {
    titulo: "ESG na prática: o meio ambiente do trabalho - Ecossistema Ânima",
    pasta: "ESG-na-pratica-o-meio-ambiente-do-trabalho",
  },
  {
    titulo: "Equidade social e o mercado de trabalho - Ecossistema Ânima",
    pasta: "equidade-social-e-o-mercado-de-trabalho",
  },
  {
    titulo: "Introdução Programação Discover - Rocketseat",
    pasta: "discover-conectar-certificate",
  },
  {
    titulo: "Desenvolvimento de Aplicativo com App Inventor - Ecossistema Ânima",
    pasta: "Desenvolvimento-app-inventor",
  },
  {
    titulo: "Introdução a HTML + CSS - Dnc",
    pasta: "certificado-html,css Introdução",
  },
  {
    titulo: "Aprofundamentos em responsabilidade civil - Ecossistema Ânima",
    pasta: "aprofundamentos-em-responsabilidade-civil",
  },
  {
    titulo: "Arduino e lógica de programação - Ecossistema Ânima",
    pasta: "arduino-e-logica-de-programacao",
  },
  {
    titulo: "Introdução à inteligência artificial - Microsoft Azure",
    pasta: "azure-ia-introducao-a-inteligencia-artificial",
  },
  {
    titulo: "Explorar o processamento de idioma natural - Microsoft Azure",
    pasta: "azure-ia-explorar-o-processamento-de-idioma-natural",
  },
  {
    titulo: "Explorar o apoio à decisão - Microsoft Azure",
    pasta: "azure-ia-explorar-o-apoio-a-decisao",
  },
  {
    titulo: "Ferramentas visuais para machine learning - Microsoft Azure",
    pasta: "azure-ia-explorar-ferramentas-visuais-para-machine-learning",
  },
  {
    titulo: "Explorar a pesquisa visual computacional - Microsoft Azure",
    pasta: "azure-ia-explorar-a-pesquisa-visual-computacional",
  },
  {
    titulo: "Explorar a mineração de conhecimento - Microsoft Azure",
    pasta: "azure-ia-explorar-a-mineracao-de-conhecimento",
  },
];

export default function Page() {
  return (
    <>
      <div className="w-full py-4 space-y-4">
        <div className="flex flex-col items-center justify-center pb-4">
          <span className="text-textgray text-4xl font-bold">Certificados | Certificações</span>
          <h1 className="text-textgray text-lg font-normal">
            Todos os cursos realizados com comprovantes
          </h1>
        </div>
        <div className="flex flex-col space-y-4">
          {lista_certificados.map((seção, index) => (
            <div 
              key={index} 
              className="flex flex-col"
            >
              <span className="w-full py-3 px-3 text-lg font-semibold bg-dark1 text-center text-gray1">
                {seção.titulo}
              </span>
              <embed
                src={`/path/${seção.pasta}.pdf`}
                type="application/pdf"
                width="100%"
                className="h-96 px-2 pb-2 bg-dark1"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
