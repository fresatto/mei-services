import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Service } from "@dtos/Service";
import api from "@services/api";
import Layout from "@components/Layout";
import Loading from "@components/Loading";

const Services: React.FC = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([]);

  const handleHireService = (service: Service) => {
    navigation.navigate("HireService", { id: service.id });
  };

  const fetchServices = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/services");
      setServices(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <Layout title="Serviços disponíveis">
      {isLoading ? (
        <Loading />
      ) : (
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
                {service.title}
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
      )}
    </Layout>
  );
};

export default Services;
