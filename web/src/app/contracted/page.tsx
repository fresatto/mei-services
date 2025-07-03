import React from "react";

import PageTitle from "@/components/PageTitle";

const ContractedServices: React.FC = () => {
  return (
    <>
      <PageTitle>Serviços contratados</PageTitle>
      <div className="flex flex-col gap-4 mt-10">
        <div className="flex flex-col bg-gray-100 p-4 rounded-lg gap-4">
          <h2 className="text-xl font-baloo font-bold text-gray-700">
            Primeiro serviço
          </h2>
          <p className="text-md font-roboto text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            hic tenetur et maxime autem error quod saepe aut. Molestias quaerat
            voluptates possimus quae maiores quam dolore voluptas nesciunt
            excepturi tempora!
          </p>
          <hr className=" border-gray-300" />
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-baloo-2 mb-0 font-bold text-gray-500">
              Contratante
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                {/* Icon */}
                <span className="text-sm font-baloo-2 font-bold text-gray-500">
                  o
                </span>
                <span className="text-sm font-roboto text-gray-500">
                  Gabriel Jose Neto
                </span>
              </div>
              <div className="flex gap-1">
                {/* Icon */}
                <span className="text-sm font-baloo-2 font-bold text-gray-500">
                  o
                </span>
                <span className="text-sm font-roboto text-gray-500">
                  gabrielfresatto@gmail.com
                </span>
              </div>
              <div className="flex gap-1">
                {/* Icon */}
                <span className="text-sm font-baloo-2 font-bold text-gray-500">
                  o
                </span>
                <span className="text-sm font-roboto text-gray-500">
                  (11) 99999-9999
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractedServices;
