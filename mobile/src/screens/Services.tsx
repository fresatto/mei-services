import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Layout from "@components/Layout";
import { Service } from "@dtos/Service";

const services: Service[] = [
  {
    id: 1,
    name: "Limpeza de casa",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 2,
    name: "Limpeza de casa",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 3,
    name: "Limpeza de casa",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 4,
    name: "Limpeza de casa",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 5,
    name: "Limpeza de casa",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 6,
    name: "Limpeza de casa",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 7,
    name: "Limpeza de casa",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 8,
    name: "Limpeza de casa",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

const Services: React.FC = () => {
  const navigation = useNavigation();

  const handleHireService = (service: Service) => {
    navigation.navigate("HireService", { id: service.id });
  };

  return (
    <Layout title="Serviços disponíveis">
      <View className="flex-1 p-4 gap-4">
        <Text className="text-md text-gray-500 font-roboto-regular">
          Selecione um dos serviços abaixo para{" "}
          <Text className="font-roboto-bold">contratar.</Text>
        </Text>

        {services.map((service) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={service.id}
            className="bg-gray-100 p-4 rounded-lg gap-1"
            onPress={() => handleHireService(service)}
          >
            <Text className="text-xl font-baloo-bold text-gray-700">
              {service.name}
            </Text>
            <Text className="text-md text-gray-500">{service.description}</Text>
            <Text className="text-lg font-baloo-bold text-orange-500">
              R$ {service.price}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Layout>
  );
};

export default Services;
