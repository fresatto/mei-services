import React from "react";
import { Text, View } from "react-native";

import Layout from "@components/Layout";
import Input from "@components/Input";
import Button from "@components/Button";

const HireService: React.FC = () => {
  return (
    <Layout
      title="Contratar serviço"
      footer={<Button>Contratar</Button>}
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
          <Input label="Nome (obrigatório)" placeholder="Digite o nome" />
          <Input label="Email (obrigatório)" placeholder="Digite o email" />
          <Input label="Telefone" placeholder="Digite o telefone" />
        </View>
      </View>
    </Layout>
  );
};

export default HireService;
