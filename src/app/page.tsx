import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import "@/lib/globals.css";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

interface Formation {
  id: number
  title: string
  institution: string
  time: string
}

const formations: Formation[] = [
  {
    id: 1,
    title: "Bacharelado em Ciência da Computação",
    institution: "Universidade São Judas Tadeu - USJT",
    time: "Jan 2022 - Dez 2025",
  },
  {
    id: 2,
    title: "Ensino Médio Completo",
    institution: "Colegio Espaço Potencial Objetivo Cotia",
    time: "Jan 2019 - Dez 2021",
  },
]

export default function Page({ params }: { params: { lang: string } }) {
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col pb-12 gap-6">
          <div className="flex items-center justify-center">
            <Image
              src="/perfil.png"
              alt="Logo Perfil"
              width={512}
              height={512}
              className="rounded-full border-4 border-dark3 h-44 w-44 bg-white"
            />
          </div>
          <div className="flex flex-col w-full space-y-3">
            <span className="text-white text-4xl text-center font-bold">
              Olá, eu sou
            </span>
            <span className="text-textgray text-4xl text-center font-bold">
              Felipe Lopes de Moura
            </span>
            <h1 className="text-cor1 text-xl font-normal text-center">
              Desenvolvedor Full Stack
            </h1>
            <div className="flex justify-center flex-wrap gap-2">
              <a
                href="mailto:felipelopesdemoura@gmail.com"
                className="flex space-x-2 hover:bg-dark4 items-center px-4 py-2 rounded-md transition-all duration-300 bg-dark3 text-gray1"
              >
                <MdOutlineMarkEmailRead className="text-white" size={25} />
                <span>E-mail</span>
              </a>
              <a
                target="_blank"
                href="https://github.com/flopessz"
                className="flex space-x-2 hover:bg-dark4 items-center px-4 py-2 rounded-md transition-all duration-300 bg-dark3 text-gray1"
              >
                <FaGithub className="text-white" size={25} />
                <span>Github</span>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/felipe-lopes-de-moura-296936246"
                className="flex space-x-2 hover:bg-dark4 items-center px-4 py-2 rounded-md transition-all duration-300 bg-blue-600 text-white"
              >
                <FaLinkedin className="text-white" size={25} />
                <span>Linkedin</span>
              </a>
              <a
                target="_blank"
                href="https://wa.me/5511996950910?text=Ola%20Felipe!%20Tudo%20bem?%20Me%20interessei%20no%20seu%20curriculo,%20podemos%20conversar?"
                className="flex space-x-2 hover:bg-dark4 items-center px-4 py-2 rounded-md transition-all duration-300 bg-green-500 text-white"
              >
                <FaWhatsapp className="text-white" size={25} />
                <span>WhatsApp/Telefone</span>
              </a>
              <a
                href="/curriculo.pdf"
                target="_blank"
                className="flex space-x-2 hover:bg-dark4 items-center px-4 py-2 rounded-md transition-all duration-300 bg-dark3 text-gray1"
              >
                <MdOutlineMarkEmailRead className="text-white" size={25} />
                <span>Curriculo</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-8">
          <div className="flex flex-col w-full space-y-2">
            <div className="flex items-center space-x-3">
              <hr className="bg-dark3 w-full h-[2px] border-none rounded-md" />
              <span className="text-textgray text-4xl font-bold whitespace-nowrap">
                Sobre mim
              </span>
              <hr className="bg-dark3 w-full h-[2px] border-none rounded-md" />
            </div>
            <h1 className="text-textgray text-lg font-normal text-start">
              Sou Felipe Lopes de Moura, profissional da área de Tecnologia da Informação,
              com sólida experiência em desenvolvimento de software e gerenciamento de
              dados. Tenho facilidade em programação e já atuei com diversas linguagens,
              incluindo Python, Java, JavaScript e TypeScript.
            </h1>
            <h1 className="text-textgray text-lg font-normal text-start">
              Possuo experiência prática no desenvolvimento de interfaces gráficas,
              implementação e manutenção de servidores SQL, redes de computadores e
              uso de frameworks modernos como React, Next.js e Node.js. Estou sempre
              em busca de novos desafios que me permitam aprimorar minhas habilidades
              técnicas e contribuir com soluções eficientes e inovadoras.
            </h1>
          </div>
          {/* <div className="flex flex-col w-full space-y-8">
            <div className="flex items-center space-x-3">
              <span className="text-cor1 text-3xl font-bold pt-1">
                •
              </span>
              <span className="text-textgray text-3xl font-bold whitespace-nowrap">
                Experiência Profissional
              </span>
              <hr className="bg-dark3 w-full h-[2px] border-none rounded-md"/>
            </div>
            <div className="flex flex-col space-y-3">
              <h1 className="text-textgray text-lg font-bold text-start">
                DEMAX | 2025 - Atual
              </h1>
              <h1 className="text-cor1 text-lg font-normal text-start">
                Desenvolvedor e Programador Pleno
              </h1>
              <h1 className="text-textgray text-lg font-normal text-start">
                Criação plataforma web para loja virtual e catálogo, controle de estoque, painel
                administrativo.
              </h1>
            </div>
            <div className="flex flex-col space-y-3">
              <h1 className="text-textgray text-lg font-bold text-end">
                Autônomo Freelancer | 2020 - 2025
              </h1>
              <h1 className="text-cor1 text-lg font-normal text-end">
                Desenvolvedor Full Stack
              </h1>
              <h1 className="text-textgray text-lg font-normal text-end">
                Trabalhei/Trabalho com o freelance de projetos para programação,
                isso varia de cada trabalho, mas já fiz trabalhos para landing
                page, automação de páginas e sistemas, criação de dashboard e
                interface gráfica, desenvolvimento web, conserto de bugs e criação
                de servidor de SQL. Mas também tenho conhecimento de edição de
                vídeo e foto.
              </h1>
            </div>
          </div> */}
          <div className="flex flex-col w-full space-y-2">

            <div className="flex items-center space-x-3">
              <span className="text-cor1 text-3xl font-bold pt-2">•</span>
              <span className="text-textgray text-3xl font-bold whitespace-nowrap">
                Formação Acadêmica
              </span>
              <hr className="bg-dark3 w-full h-[2px] border-none rounded-md" />
            </div>
          

            <div className="ml-1 relative border-l-2 border-cor1">
              {formations.map((formation, index) => (
                <div key={formation.id} className="ml-6 mb-8">
                  <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-cor1 text-white flex items-center justify-center">
                    <GraduationCap size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-textgray">{formation.title}</h3>
                  <p className="text-sm text-textgray">{formation.institution}</p>
                  <p className="text-xs text-textgray">{formation.time}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
