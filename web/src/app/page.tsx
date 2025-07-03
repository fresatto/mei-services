"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import PageTitle from "@/components/PageTitle";
import { Service } from "@/dtos/Service";
import api from "@/services/api";

export default function Page() {
  const { data: services, isPending } = useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: () => api.get("/services").then((res) => res.data),
  });

  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <PageTitle>Serviços cadastrados</PageTitle>
        <button className="bg-gray-900 rounded-md items-center justify-center text-white font-baloo-2 font-bold text-md px-4 py-2 hover:bg-gray-700 cursor-pointer">
          <Link href="/new-service">Novo serviço</Link>
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {isPending ? (
          <div>Carregando...</div>
        ) : (
          services?.map((service) => (
            <div key={service.id} className="bg-gray-100 p-4 rounded-lg gap-1">
              <h2 className="text-xl font-baloo font-bold text-gray-700">
                {service.title}
              </h2>
              <p className="text-md font-roboto text-gray-500">
                {service.description}
              </p>
              <p className="text-lg font-baloo-2 font-bold text-orange-500">
                {service.price}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
