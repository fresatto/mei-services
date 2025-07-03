"use client";

import React from "react";
import colors from "tailwindcss/colors";
import { EnvelopeSimple, Phone, UserCircle } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";

import PageTitle from "@/components/PageTitle";
import PageLoading from "@/components/PageLoading";
import api from "@/services/api";
import { ContractedService } from "@/dtos/Service";
import { useToast } from "@/hooks/useToast";
import { maskPhone } from "@/utils/mask";

const ContractedServices: React.FC = () => {
  const { showToast } = useToast();

  const { data, isFetching } = useQuery({
    queryKey: ["hires"],
    queryFn: async () => {
      try {
        const response = await api.get<ContractedService[]>(
          "/hires?_expand=service"
        );
        return response.data.map((hired) => ({
          ...hired,
          formattedPhone: maskPhone(hired.phone ?? ""),
        }));
      } catch (error) {
        console.log(error);

        showToast({
          message: "Erro ao buscar serviços contratados",
          type: "error",
        });

        return [];
      }
    },
  });

  return (
    <>
      <PageTitle>Serviços contratados</PageTitle>
      <div className="flex flex-col gap-4 mt-10">
        {isFetching ? (
          <PageLoading />
        ) : data?.length === 0 ? (
          <div className="flex flex-col gap-4">
            <p className="text-md font-roboto text-gray-700 text-center">
              Nenhum serviço contratado.
            </p>
          </div>
        ) : (
          data?.map((hire) => (
            <div
              key={hire.id}
              className="flex flex-col bg-gray-100 p-4 rounded-lg gap-4"
            >
              <h2 className="text-xl font-baloo font-bold text-gray-700">
                {hire.service.title}
              </h2>
              <p className="text-md font-roboto text-gray-500">
                {hire.service.description}
              </p>
              <hr className=" border-gray-300" />
              <div className="flex flex-col gap-1">
                <h3 className="text-md font-baloo-2 mb-2 font-bold text-gray-500">
                  Contratante
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <UserCircle size={20} color={colors.gray[500]} />
                    <span className="text-sm font-roboto text-gray-500">
                      {hire.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <EnvelopeSimple size={20} color={colors.gray[500]} />
                    <span className="text-sm font-roboto text-gray-500">
                      {hire.email}
                    </span>
                  </div>
                  {hire.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={20} color={colors.gray[500]} />
                      <span className="text-sm font-roboto text-gray-500">
                        {hire.formattedPhone}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ContractedServices;
