import React from "react";

import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="p-4 h-15 flex justify-center items-center bg-gray-900">
      <nav className="flex gap-4 max-w-7xl mx-auto">
        <Link href="/" className="text-white font-baloo-2 font-bold">
          Cadastrados
        </Link>
        <Link
          href="/about"
          className="text-gray-300 font-baloo-2 hover:text-white"
        >
          Contratados
        </Link>
        <Link
          href="/contact"
          className="text-gray-300 font-baloo-2 hover:text-white"
        >
          Novo serviço
        </Link>
      </nav>
    </header>
  );
};

export default Header;
