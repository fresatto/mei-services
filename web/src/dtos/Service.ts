export type Service = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export type ContractedService = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  service: Service;
};
