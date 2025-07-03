"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import PageTitle from "@/components/PageTitle";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@/hooks/useToast";
import {
  NewServiceFormData,
  newServiceSchema,
} from "./schema/newServiceSchema";
import api from "@/services/api";

const NewService: React.FC = () => {
  const router = useRouter();
  const { showToast } = useToast();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(newServiceSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: NewServiceFormData) => api.post("/services", data),
    onSuccess: () => {
      router.push("/");
      showToast({
        message: "Serviço cadastrado com sucesso",
      });
    },
    onError: () => {
      showToast({
        message: "Erro ao cadastrar serviço",
        type: "error",
      });
    },
  });

  const onSubmit = (data: NewServiceFormData) => {
    mutate(data);
  };

  return (
    <>
      <PageTitle>Novo serviço</PageTitle>
      <div className="flex flex-col gap-4 mt-10">
        <Controller
          control={control}
          name="title"
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

        <Button
          onClick={handleSubmit(onSubmit)}
          className="self-start"
          isLoading={isPending}
        >
          Cadastrar
        </Button>
      </div>
    </>
  );
};

export default NewService;
