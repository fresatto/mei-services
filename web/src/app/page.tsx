"use client";

import { useQuery } from "@tanstack/react-query";

import PageTitle from "@/components/PageTitle";
import { Service } from "@/dtos/Service";
import api from "@/services/api";
import PageLoading from "@/components/PageLoading";
import { useToast } from "@/hooks/useToast";

export default function Page() {
  const { showToast } = useToast();

  const { data: services, isPending } = useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      try {
        const response = await api.get("/services");
        return response.data;
      } catch (error) {
        console.log(error);

        showToast({
          message: "Erro ao buscar serviços cadastrados",
          type: "error",
        });

        return [];
      }
    },
  });

  return (
    <>
      <PageTitle showButton>Serviços cadastrados</PageTitle>
      <div className="flex flex-col gap-4">
        {isPending ? (
          <PageLoading />
        ) : services?.length === 0 ? (
          <div className="flex flex-col gap-4">
            <p className="text-md font-roboto text-gray-700 text-center">
              Nenhum serviço cadastrado.
            </p>
          </div>
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
