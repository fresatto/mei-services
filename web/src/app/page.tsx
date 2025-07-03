import Link from "next/link";

import PageTitle from "@/components/PageTitle";

export default function Page() {
  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <PageTitle>Serviços cadastrados</PageTitle>
        <button className="bg-gray-900 rounded-md items-center justify-center text-white font-baloo-2 font-bold text-md px-4 py-2 hover:bg-gray-700 cursor-pointer">
          <Link href="/new-service">Novo serviço</Link>
        </button>
      </div>
    </>
  );
}
