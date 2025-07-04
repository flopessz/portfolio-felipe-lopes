import React, { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";

interface PageProps {
  // children: ReactNode;
}

const Footer = () => {
  return (
    <>
      <footer className="flex h-fit flex-col bg-dark6 w-full pb-4">
        <hr className="min-h-[2px] w-full animate-pulse bg-gradient-to-r from-dark2 via-dar1 to-gray-500 border-none" />

        <div className="flex space-x-2 text-gray1 text-sm justify-between items-center pt-4 px-4">
          <span>© {new Date().getFullYear()} | Felipe Lopes de Moura</span>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:felipelopesdemoura@gmail.com"
              className="flex items-center hover:text-textgray text-white"
            >
              <MdOutlineMarkEmailRead size={25} />
            </a>
            <a
              target="_blank"
              href="https://github.com/flopessz"
              className="flex items-center hover:text-textgray text-white"
            >
              <FaGithub size={25} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/felipe-lopes-de-moura-296936246"
              className="flex items-center hover:text-blue-600 text-white"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              target="_blank"
              href="https://wa.me/5511996950910"
              className="flex items-center hover:text-green-500 text-white"
            >
              <FaWhatsapp size={25} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
