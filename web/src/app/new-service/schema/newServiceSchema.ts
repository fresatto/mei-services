import * as yup from "yup";

export const newServiceSchema = yup.object({
  title: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Nome do serviço deve ter no mínimo 3 caracteres"),
  price: yup
    .number()
    .min(10, "Preço deve ser pelo menos R$10,00")
    .required("Campo obrigatório"),
  description: yup
    .string()
    .min(5, "Descrição do serviço deve ter no mínimo 5 caracteres")
    .when("$description", {
      is: (description: string) => description?.length > 0,
      then: (schema) =>
        schema.min(5, "Descrição do serviço deve ter no mínimo 5 caracteres"),
      otherwise: (schema) => schema.optional(),
    })
    .transform((value) => (value.length === 0 ? undefined : value)),
});

export type NewServiceFormData = yup.InferType<typeof newServiceSchema>;
