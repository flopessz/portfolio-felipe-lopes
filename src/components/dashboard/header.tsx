"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  BookmarkPlus,
  Send,
  BookOpenCheck,
  Scroll,
} from "lucide-react";

export default function Header() {
  const router = useRouter();
  let pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 flex w-full justify-center py-3">
      <div className="space-x-1 flex p-1 border border-gray-600 rounded-xl bg-dark3 bg-opacity-50">
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
          className={` ${pathname === "/certificados" && "bg-gray-600 text-white"} 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-xl py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
        >
          <BookOpenCheck className="text-white" />
          <span>Certificados</span>
        </Link>
        <Link
          href="/conhecimentos"
          className={` ${pathname === "/conhecimentos" && "bg-gray-600 text-white"} 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-xl py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
        >
          <BookmarkPlus className="text-white" />
          <span>Conhecimentos</span>
        </Link>
        <Link
          href="/curriculo"
          className={` ${pathname === "/curriculo" && "bg-gray-600 text-white"} 
              flex items-center gap-3 px-4 hover:bg-dark4 text-textgray rounded-xl py-2 disabled:opacity-50 disabled:pointer-events-none transition-all`}
        >
          <Scroll className="text-white" />
          <span>Currículo</span>
        </Link>
      </div>
    </header>
  );
}
