import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Header from "@components/Header";

const services = [
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
  const { bottom } = useSafeAreaInsets();

  return (
    <View className="flex-1">
      <Header title="Serviços disponíveis" />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottom }}
      >
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
            >
              <Text className="text-xl font-baloo-bold text-gray-700">
                {service.name}
              </Text>
              <Text className="text-md text-gray-500">
                {service.description}
              </Text>
              <Text className="text-lg font-baloo-bold text-orange-500">
                R$ {service.price}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Services;
