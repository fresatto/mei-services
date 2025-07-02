import React from "react";
import { Text, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import Layout from "@components/Layout";
import Input from "@components/Input";
import Button from "@components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  HireServiceFormData,
  hireServiceSchema,
  VALID_PHONE_LENGTH,
} from "./schema/hireServiceSchema";
import { useToast } from "src/contexts/useToast";

const HireService: React.FC = () => {
  const navigation = useNavigation();
  const { showToast } = useToast();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    resolver: yupResolver(hireServiceSchema),
  });

  const onSubmit = (data: HireServiceFormData) => {
    console.log(data);

    navigation.navigate("Services");

    showToast("Serviço contratado com sucesso!");
  };

  return (
    <Layout
      title="Contratar serviço"
      footer={<Button onPress={handleSubmit(onSubmit)}>Contratar</Button>}
      showBackButton
    >
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
            Nome do serviço
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
                maxLength={VALID_PHONE_LENGTH}
                onChangeText={field.onChange}
                error={error?.message}
                {...field}
              />
            )}
          />
        </View>
      </View>
    </Layout>
  );
};

export default HireService;
