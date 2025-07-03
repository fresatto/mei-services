"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";

import PageTitle from "@/components/PageTitle";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  NewServiceFormData,
  newServiceSchema,
} from "./schema/newServiceSchema";

const NewService: React.FC = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(newServiceSchema),
  });

  const onSubmit = (data: NewServiceFormData) => {
    console.log(data);
  };

  return (
    <>
      <PageTitle>Novo serviço</PageTitle>
      <div className="flex flex-col gap-4 mt-10">
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Nome do serviço (obrigatório)"
              placeholder="Digite o nome do serviço"
              error={error?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="price"
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Preço (obrigatório)"
              placeholder="Digite o preço do serviço"
              currencyInput
              error={error?.message}
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Descrição"
              placeholder="Digite a descrição do serviço"
              error={error?.message}
              {...field}
            />
          )}
        />

        <Button onClick={handleSubmit(onSubmit)} className="self-start">
          Cadastrar
        </Button>
      </div>
    </>
  );
};

export default NewService;
