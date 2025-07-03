import React from "react";

import PageTitle from "@/components/PageTitle";
import Button from "@/components/Button";
import Input from "@/components/Input";

const NewService: React.FC = () => {
  return (
    <>
      <PageTitle>Novo serviço</PageTitle>
      <div className="flex flex-col gap-4 mt-10">
        <Input
          label="Nome do serviço (obrigatório)"
          placeholder="Digite o nome do serviço"
        />
        <Input
          label="Preço (obrigatório)"
          placeholder="Digite o preço do serviço"
          currencyInput
        />
        <Input label="Descrição" placeholder="Digite a descrição do serviço" />
        <Button className="self-start">Cadastrar</Button>
      </div>
    </>
  );
};

export default NewService;
