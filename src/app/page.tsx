import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import "@/lib/globals.css";
import Link from "next/link";

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
              Sou um profissional da área de Tecnologia da Informação com
              facilidade em programação, tecnologia e gerenciamento de dados.
              Possuo experiência com desenvolvimento de interfaces gráficas e
              web, SQL e redes. Estou sempre em busca de aprimoramento técnico e
              novos desafios na área de TI.
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
              <hr className="bg-dark3 w-full h-[2px] border-none rounded-md" />
              <span className="text-textgray text-3xl font-bold whitespace-nowrap">
                Formação Acadêmica
              </span>
              <span className="text-cor1 text-3xl font-bold pt-2">•</span>
            </div>
            <h1 className="text-textgray text-lg font-normal text-start">
              Ensino Médio Completo – concluído em 2021
            </h1>
            <h1 className="text-textgray text-lg font-normal text-start">
              Colégio Espaço Potencial Objetivo Cotia
            </h1>
            <h1 className="text-textgray text-lg font-normal text-start pt-1">
              Graduação em Ciências da Computação – cursando/possível conclusão
              em 12/2025
            </h1>
            <h1 className="text-textgray text-lg font-normal text-start">
              Universidade São Judas Tadeu - USJT (7º Semestre Atualmente)
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
