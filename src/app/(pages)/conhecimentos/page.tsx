import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { Metadata } from "next";
import React, {} from "react";
import Image from "next/image";
import "@/lib/globals.css";

export const metadata: Metadata = {
  title: "Conhecimentos",
  description: "Conhecimentos",
  keywords: "Conhecimentos",
};

export default function Page() {
  return (
    <>
      <div className="w-full py-4 space-y-4">
        <div className="flex flex-col items-center justify-center pb-4">
          <span className="text-textgray text-4xl font-bold">
            Habilidade e Conhecimentos
          </span>
          <h1 className="text-textgray text-lg font-normal">
            Basico, Intermediario e Avançado.
          </h1>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col w-full space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-textgray text-2xl font-normal text-start">
                Linguagens de Programação/Marcação:
              </h1>
              <h1 className="text-textgray text-lg font-normal text-start">
                [Python, Java, JavaScript, LUA, TypeScript, HTML, CSS].
              </h1>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=13441&format=png"
                    alt="Python"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-blue-500" size={25} />
                    <FaRegStarHalfStroke className="text-blue-500" size={25} />
                    <FaRegStar className="text-blue-500" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=13679&format=png"
                    alt="Java"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-blue-500" size={25} />
                    <FaRegStarHalfStroke className="text-blue-500" size={25} />
                    <FaRegStar className="text-blue-500" size={25} />
                  </div>
                </div>
                <Image
                  src="https://img.icons8.com/?size=256&id=108784&format=png"
                  alt="JavaScript"
                  priority
                  width={256}
                  height={256}
                  className="h-16 w-16 bg-yellow-500 rounded"
                />
                <Image
                  src="https://img.icons8.com/?size=256&id=KppI8aNv6oQe&format=png"
                  alt="LUA"
                  priority
                  width={256}
                  height={256}
                  className="h-16 w-16 bg-white rounded"
                />
                <Image
                  src="https://img.icons8.com/?size=256&id=uJM6fQYqDaZK&format=png"
                  alt="TypeScript"
                  priority
                  width={256}
                  height={256}
                  className="h-16 w-16 bg-blue-600 rounded"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-textgray text-2xl font-normal text-start">
                Ferramentas e Tecnologias:
              </h1>
              <h1 className="text-textgray text-lg font-normal text-start">
                [Visual Studio Code, GitHub, Colab, React, Next, Node].
              </h1>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-textgray text-2xl font-normal text-start">
                Banco de Dados:
              </h1>
              <h1 className="text-textgray text-lg font-normal text-start">
                [SQL, MySQL, HeidSQL, MariaDB].
              </h1>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-textgray text-2xl font-normal text-start">
                Pacote office:
              </h1>
              <h1 className="text-textgray text-lg font-normal text-start">
                [Word, PowerPoint, Excel e Power BI]
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-4 text-white items-center justify-end space-x-2 py-2.5 px-3">
            <div className="flex items-center space-x-2">
              <span>Básico</span>
              <div className="flex space-x-2 items-center">
                <FaStar className="text-white" size={25} />
                <FaRegStar className="text-white" size={25} />
                <FaRegStar className="text-white" size={25} />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span>Intermediário</span>
              <div className="flex space-x-2 items-center">
                <FaStar className="text-white" size={25} />
                <FaStar className="text-white" size={25} />
                <FaRegStar className="text-white" size={25} />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span>Avançado</span>
              <div className="flex space-x-2 items-center">
                <FaStar className="text-white" size={25} />
                <FaStar className="text-white" size={25} />
                <FaStar className="text-white" size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
