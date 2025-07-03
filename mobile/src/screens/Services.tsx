import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Service } from "@dtos/Service";
import api from "@services/api";
import Layout from "@components/Layout";
import Loading from "@components/Loading";
import { useToast } from "@hooks/useToast";
import { formatCurrency } from "@utils/currency";

const Services: React.FC = () => {
  const navigation = useNavigation();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([]);

  const handleHireService = (service: Service) => {
    navigation.navigate("HireService", { serviceId: service.id });
  };

  const fetchServices = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/services");
      setServices(response.data);
    } catch (error) {
      console.log(error);
      showToast({
        message: "Erro ao buscar serviços!",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formattedServices = services.map((service) => ({
    ...service,
    formattedPrice: formatCurrency(service.price),
  }));

  return (
    <Layout title="Serviços disponíveis">
      {isLoading ? (
        <Loading />
      ) : (
        <View className="flex-1 p-4 gap-4">
          {services.length > 0 ? (
            <Text className="text-md text-gray-500 font-roboto-regular">
              Selecione um dos serviços abaixo para{" "}
              <Text className="font-roboto-bold">contratar.</Text>
            </Text>
          ) : null}
          <FlatList
            data={formattedServices}
            scrollEnabled={false}
            keyExtractor={(item) => String(item.id)}
            contentContainerClassName=" flex-1 gap-4"
            ListEmptyComponent={() => (
              <View className="flex-1 items-center justify-center">
                <Text className="text-lg text-gray-500 font-roboto-regular">
                  Nenhum serviço encontrado.
                </Text>
              </View>
            )}
            renderItem={({ item: service }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                key={service.id}
                className="bg-gray-100 p-4 rounded-lg gap-1"
                onPress={() => handleHireService(service)}
              >
                <Text className="text-xl font-baloo-bold text-gray-700">
                  {service.title}
                </Text>
                {service.description && (
                  <Text className="text-md text-gray-500">
                    {service.description}
                  </Text>
                )}
                <Text className="text-lg font-baloo-bold text-orange-500">
                  {service.formattedPrice}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </Layout>
  );
};

export default Services;
