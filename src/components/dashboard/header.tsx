"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { BookmarkPlus, Send, BookOpenCheck, Scroll, Menu } from "lucide-react";

export default function Header() {
  const [menuMobile, setMenuMobile] = useState(false);
  let pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Para telas entre md e lg
        setMenuMobile(true);
      } else {
        setMenuMobile(false);
      }
    };

    // Verifica o tamanho inicial da tela
    handleResize();

    // Adiciona o event listener para o resize
    window.addEventListener("resize", handleResize);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 flex w-full justify-center py-3">
      <div
        className={`space-x-1 flex p-1 border border-gray-600 rounded-2xl bg-dark3 bg-opacity-50`}
      >
        {menuMobile && (
          <button
            className={`flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-xl py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
          >
            <Menu className="text-white" />
            <span>Menu</span>
          </button>
        )}
        <Link
          href="/"
          className={` ${pathname === "/" && "bg-gray-600 text-white"} 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-xl py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
        >
          <Send className="text-white" />
          {!menuMobile && (
            <span>Portfólio</span>
          )}
        </Link>
        <Link
          href="/certificados"
          className={` ${
            pathname === "/certificados" && "bg-gray-600 text-white"
          } 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-xl py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
        >
          <BookOpenCheck className="text-white" />
          {!menuMobile && (
            <span>Certificados</span>
          )}
        </Link>
        <Link
          href="/conhecimentos"
          className={` ${
            pathname === "/conhecimentos" && "bg-gray-600 text-white"
          } 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-xl py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
        >
          <BookmarkPlus className="text-white" />
          {!menuMobile && (
            <span>Conhecimentos</span>
          )}
        </Link>
        <Link
          href="/curriculo"
          className={` ${pathname === "/curriculo" && "bg-gray-600 text-white"} 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-xl py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
        >
          <Scroll className="text-white" />
          {!menuMobile && (
            <span>Currículo</span>
          )}
        </Link>
      </div>
    </header>
  );
}
