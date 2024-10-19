import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { Metadata } from "next";
import React from "react";
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
        <div className="flex flex-col items-center justify-center">
          <span className="text-textgray text-4xl font-bold">
            Habilidade e Conhecimentos
          </span>
          <h1 className="text-textgray text-lg font-normal">
            Basico, Intermediario e Avançado.
          </h1>
        </div>
        <div className="w-full flex flex-wrap py-4 gap-4 text-white items-center justify-center space-x-2 px-3">
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
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col w-full space-y-6">
            <div className="flex flex-col space-y-2 bg-dark3 border-2 border-dark5 shadow-md px-4 py-3">
              <h1 className="text-textgray text-2xl font-normal text-center">
                Linguagens de Programação/Marcação:
              </h1>
              <h1 className="text-textgray text-lg font-normal text-center">
                [Python, Java, JavaScript, LUA, TypeScript, HTML, CSS].
              </h1>
              <div className="flex flex-wrap gap-3 justify-center">
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
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
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
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=108784&format=png"
                    alt="JavaScript"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=KppI8aNv6oQe&format=png"
                    alt="LUA"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16 bg-white"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=uJM6fQYqDaZK&format=png"
                    alt="TypeScript"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=v8RpPQUwv0N8&format=png"
                    alt="HTML"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=21278&format=png"
                    alt="CSS"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 bg-dark3 border-2 border-dark5 shadow-md px-4 py-3">
              <h1 className="text-textgray text-2xl font-normal text-center">
                Ferramentas e Tecnologias:
              </h1>
              <h1 className="text-textgray text-lg font-normal text-center">
                [Visual Studio Code, GitHub, React, Next, Node, Tailwind].
              </h1>
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=0OQR1FYCuA9f&format=png"
                    alt="VisualStudioCode"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=62856&format=png"
                    alt="GitHub"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=123603&format=png"
                    alt="React"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://svgrepo.com/show/354113/nextjs-icon.svg"
                    alt="Next"
                    priority
                    width={256}
                    height={256}
                    className="h-12 w-12"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=hsPbhkOH4FMe&format=png"
                    alt="Node"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://svgrepo.com/show/374118/tailwind.svg"
                    alt="Tailwind"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 bg-dark3 border-2 border-dark5 shadow-md px-4 py-3">
              <h1 className="text-textgray text-2xl font-normal text-center">
                Banco de Dados:
              </h1>
              <h1 className="text-textgray text-lg font-normal text-center">
                [SQL, MySQL, HeidSQL, MariaDB].
              </h1>
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://www.svgrepo.com/show/255832/sql.svg"
                    alt="SQL"
                    priority
                    width={256}
                    height={256}
                    className="h-12 w-12"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://svgrepo.com/show/303251/mysql-logo.svg"
                    alt="MySQL"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/3/32/HeidiSQL_logo_image.png"
                    alt="HeidSQL"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://www.svgrepo.com/show/373824/mariadb.svg"
                    alt="MariaDB"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 bg-dark3 border-2 border-dark5 shadow-md px-4 py-3">
              <h1 className="text-textgray text-2xl font-normal text-center">
                Pacote office:
              </h1>
              <h1 className="text-textgray text-lg font-normal text-center">
                [Word, PowerPoint, Excel e Power BI]
              </h1>
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=pGHcje298xSl&format=png"
                    alt="Word"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=ifP93G7BXUhU&format=png"
                    alt="PowerPoint"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=117561&format=png"
                    alt="Excel"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded px-3">
                  <Image
                    src="https://img.icons8.com/?size=256&id=Ny0t2MYrJ70p&format=png"
                    alt="PowerBI"
                    priority
                    width={256}
                    height={256}
                    className="h-16 w-16"
                  />
                  <div className="flex space-x-2">
                    <FaStar className="text-dark1" size={25} />
                    <FaStar className="text-dark1" size={25} />
                    <FaRegStar className="text-dark1" size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
