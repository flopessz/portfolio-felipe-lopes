"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Inicia a animação de saída
      setTimeout(() => setLoading(false), 500); // Remove o componente após a animação
    }, 1000);

    return () => clearTimeout(timer); // Limpa o timeout se o componente for desmontado
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`flex items-center justify-center w-full h-full bg-transparent transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex">
            <Image
              alt="Logo Loading"
              src="/perfil.png"
              width={265}
              height={164}
              className="h-24 w-36 animate-pulse"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
