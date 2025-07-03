"use client";

import React from "react";
import Link from "next/link";
import { tv } from "tailwind-variants";
import { usePathname } from "next/navigation";

const linkStyles = tv({
  base: "text-gray-400 font-baloo-2 font-bold hover:text-white",
  variants: {
    active: {
      true: "text-white",
    },
  },
});

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="p-4 h-15 flex justify-center items-center bg-gray-900">
      <nav className="flex gap-4 max-w-7xl mx-auto">
        <Link href="/" className={linkStyles({ active: pathname === "/" })}>
          Cadastrados
        </Link>
        <Link
          href="/contracted"
          className={linkStyles({ active: pathname === "/contracted" })}
        >
          Contratados
        </Link>
        <Link
          href="/new-service"
          className={linkStyles({ active: pathname === "/new-service" })}
        >
          Novo serviço
        </Link>
      </nav>
    </header>
  );
};

export default Header;
