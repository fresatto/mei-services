import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";

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
  const [service, setService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    resolver: yupResolver(hireServiceSchema),
  });

  const onSubmit = async (data: HireServiceFormData) => {
    try {
      setIsLoading(true);

      const unmaskedPhone = data.phone?.replace(/\D/g, "");

      await api.post("/hires", {
        serviceId,
        name: data.name,
        email: data.email,
        phone: unmaskedPhone,
      });

      navigation.navigate("Services");
      showToast({
        message: "Serviço contratado com sucesso!",
      });
    } catch (error) {
      console.log(error);
      showToast({
        message: "Erro ao contratar serviço!",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function getServiceDetails() {
      try {
        setIsLoading(true);
        const response = await api.get(`/services/${serviceId}`);
        setService(response.data);
      } catch (error) {
        console.log(error);
        showToast({
          message: "Erro ao buscar detalhes do serviço!",
          type: "error",
        });
      } finally {
        setIsLoading(false);
      }
    }

    getServiceDetails();
  }, [serviceId, showToast]);

  const isGettingServiceDetails = isLoading && !service;

  return (
    <Layout
      title="Contratar serviço"
      footer={
        !isGettingServiceDetails && (
          <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
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
