import Image from "next/image";

export default function Loading() {
  return (
    <>
      <div className="flex h-[70vh] w-full items-center justify-center">
        <Image
          width={265}
          height={164}
          alt="Logo Loading"
          src="/perfil.png"
          className="h-24 w-36 animate-pulse opacity-20"
          priority
        />
      </div>
    </>
  );
}
