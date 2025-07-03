"use client";

import React from "react";
import colors from "tailwindcss/colors";
import { EnvelopeSimple, Phone, UserCircle } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";

import PageTitle from "@/components/PageTitle";
import api from "@/services/api";
import { ContractedService } from "@/dtos/Service";

const ContractedServices: React.FC = () => {
  const { data, isPending } = useQuery<ContractedService[]>({
    queryKey: ["hires"],
    queryFn: () => api.get("/hires?_expand=service").then((res) => res.data),
  });

  return (
    <>
      <PageTitle>Serviços contratados</PageTitle>
      <div className="flex flex-col gap-4 mt-10">
        {isPending ? (
          <div>Carregando...</div>
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
                        {hire.phone}
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
