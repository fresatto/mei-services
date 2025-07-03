import React from "react";
import { Text, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useMutation, useQuery } from "@tanstack/react-query";

import Layout from "@components/Layout";
import Input from "@components/Input";
import Button from "@components/Button";
import Loading from "@components/Loading";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@hooks/useToast";
import api from "@services/api";
import { Service } from "@dtos/Service";
import {
  HireServiceFormData,
  hireServiceSchema,
  VALID_PHONE_MASEKED_LENGTH,
} from "./schema/hireServiceSchema";

const HireService: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { showToast } = useToast();
  const { serviceId } = route.params as { serviceId: number };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    resolver: yupResolver(hireServiceSchema),
  });

  const { data: service, isLoading: isGettingServiceDetails } = useQuery({
    queryKey: ["services", serviceId],
    queryFn: async () => {
      try {
        const response = await api.get<Service>(`/services/${serviceId}`);
        return response.data;
      } catch (error) {
        console.log(error);
        showToast({
          message: "Erro ao buscar detalhes do serviço!",
          type: "error",
        });
        return null;
      }
    },
  });

  const { mutate: hireService, isPending: isHiringService } = useMutation({
    mutationFn: async (data: HireServiceFormData) => {
      const unmaskedPhone = data.phone?.replace(/\D/g, "");

      await api.post("/hires", {
        serviceId,
        name: data.name,
        email: data.email,
        phone: unmaskedPhone,
      });
    },
    onSuccess: () => {
      navigation.navigate("Services");
      showToast({
        message: "Serviço contratado com sucesso!",
      });
    },
    onError: () => {
      showToast({
        message: "Erro ao contratar serviço!",
        type: "error",
      });
    },
  });

  const onSubmit = (data: HireServiceFormData) => {
    hireService(data);
  };

  return (
    <Layout
      title="Contratar serviço"
      footer={
        !isGettingServiceDetails && (
          <Button isLoading={isHiringService} onPress={handleSubmit(onSubmit)}>
            Contratar
          </Button>
        )
      }
      showBackButton
    >
      {isGettingServiceDetails ? (
        <Loading />
      ) : (
        <View className="flex-1 p-4 gap-4">
          <Text className="text-md text-gray-500 font-roboto-regular">
            Preencha os dados abaixo para fazer a{" "}
            <Text className="font-roboto-bold">contratação do serviço.</Text>
          </Text>
          <View className="h-[1px] w-full bg-gray-200" />
          <View className="gap-1">
            <Text className="text-sm text-gray-500 font-roboto-regular">
              Serviço selecionado
            </Text>
            <Text className="text-2xl text-gray-700 font-baloo-bold">
              {service?.title}
            </Text>
          </View>
          <View className="gap-4">
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState: { error } }) => (
                <Input
                  label="Nome (obrigatório)"
                  placeholder="Digite o nome"
                  autoCapitalize="words"
                  onChangeText={field.onChange}
                  error={error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <Input
                  label="Email (obrigatório)"
                  placeholder="Digite o email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={field.onChange}
                  error={error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field, fieldState: { error } }) => (
                <Input
                  label="Telefone"
                  placeholder="Digite o telefone"
                  keyboardType="number-pad"
                  returnKeyType="done"
                  onSubmitEditing={handleSubmit(onSubmit)}
                  maxLength={VALID_PHONE_MASEKED_LENGTH}
                  onChangeText={field.onChange}
                  error={error?.message}
                  phone
                  {...field}
                />
              )}
            />
          </View>
        </View>
      )}
    </Layout>
  );
};

export default HireService;
