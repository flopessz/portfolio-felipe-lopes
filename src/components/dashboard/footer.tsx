import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Medal } from "lucide-react";

import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaDiscord,
  FaTelegramPlane,
  FaMoneyBillWave,
  FaListAlt,
} from "react-icons/fa";

import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";

interface PageProps {
  // children: ReactNode;
}

const Footer = () => {
  return (
    <>
      <footer className="flex h-fit flex-col bg-dark6 w-full pb-4">
        <hr className="min-h-[2px] w-full animate-pulse bg-gradient-to-r from-dark2 via-dar1 to-gray-500 border-none" />

        <div className="flex space-x-2 text-gray1 text-sm justify-between items-center pt-4 px-4">
          <span>© 2024 | Felipe Lopes de Moura</span>
          <span>Portfólio Desenvolvido em | Next, Node, React, TypeScript e Tailwindcss</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
