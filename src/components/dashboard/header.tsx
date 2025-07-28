"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BookmarkPlus, Send, BookOpenCheck, Scroll, Menu, BookUser } from "lucide-react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [menuMobile, setMenuMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [menuWidth, setMenuWidth] = useState("0px");
  let pathname = usePathname();

  useEffect(() => {
    if (menuOpen && contentRef.current) {
      setMenuWidth(`92%`);
    } else {
      setMenuWidth("0px");
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMenuMobile(true);
      } else {
        setMenuOpen(false);
        setMenuMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex w-full justify-center py-3
    border border-gray-600 bg-dark3 bg-opacity-50">
      {menuOpen && (
        <div className="lg:hidden">
          <div 
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-50 bg-dark1 opacity-80" 
          />
          <div
            ref={contentRef}
            style={{
              width: menuWidth,
            }}
            className="overflow-hidden overflow-y-auto transition-all duration-700 ease-out fixed inset-y-0 right-0 z-50 w-11/12 bg-dark3 px-6 py-6"
          >
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center -m-1.5 p-1.5">
                <Image
                  alt="Logo Header Celular"
                  src="/perfil.png"
                  width={512}
                  height={512}
                  className="h-16 w-16"
                  priority
                />
                <div className="flex h-full">
                  <span className="text-[#d1d1d1] text-sm mt-3.5 -ml-4">elipe Lopes de Moura</span>
                </div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-textgray"
                onClick={() => setMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div
              className="space-y-3 flex flex-col p-1 bg-opacity-50"
            >
              <Link
                href="/"
                className={` ${pathname === "/" && "bg-gray-600 text-white"} 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-xl py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
              >
                <Send className="text-white" />
                <span>Portfólio</span>
              </Link>
              <Link
                href="/certificados"
                className={` ${
                  pathname === "/certificados" && "bg-gray-600 text-white"
                } 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-xl py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
              >
                <BookOpenCheck className="text-white" />
                <span>Certificados</span>
              </Link>
              <Link
                href="/conhecimentos"
                className={` ${
                  pathname === "/conhecimentos" && "bg-gray-600 text-white"
                } 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-xl py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
              >
                <BookmarkPlus className="text-white" />
                <span>Conhecimentos</span>
              </Link>
              <Link
                href="/contato"
                className={` ${
                  pathname === "/contato" && "bg-gray-600 text-white"
                } 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-xl py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
              >
                <BookUser className="text-white" />
                <span>Contato</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div
        className={`space-x-1 flex`}
      >
        {menuMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-xl py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
          >
            <Menu className="text-white" />
            <span>Menu</span>
          </button>
        )}
        <Link
          href="/"
          className={` ${pathname === "/" && "bg-gray-700 text-white"} 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-lg py-2.5 disabled:opacity-50 disabled:pointer-events-none transition-all`}
        >
          <Send className="text-white" />
          {!menuMobile && <span>Portfólio</span>}
        </Link>
        <Link
          href="/certificados"
          className={` ${
            pathname === "/certificados" && "bg-gray-600 text-white"
          } 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-lg py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
        >
          <BookOpenCheck className="text-white" />
          {!menuMobile && <span>Certificados</span>}
        </Link>
        <Link
          href="/conhecimentos"
          className={` ${
            pathname === "/conhecimentos" && "bg-gray-600 text-white"
          } 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-lg py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
        >
          <BookmarkPlus className="text-white" />
          {!menuMobile && <span>Conhecimentos</span>}
        </Link>
        <Link
          href="/contato"
          className={` ${pathname === "/contato" && "bg-gray-600 text-white"} 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-lg py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
        >
          <BookUser className="text-white" />
          {!menuMobile && <span>Contato</span>}
        </Link>
      </div>
    </header>
  );
}