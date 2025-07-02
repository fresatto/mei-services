import * as yup from "yup";

export const VALID_PHONE_LENGTH = 11;

const hireServiceSchema = yup.object({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  phone: yup
    .string()
    .min(VALID_PHONE_LENGTH, "Telefone deve ter no mínimo 11 caracteres")
    .when("$phone", {
      is: (phone: string) => phone?.length > 0,
      then: (schema) =>
        schema.min(11, "Telefone deve ter no mínimo 11 caracteres"),
      otherwise: (schema) => schema.optional(),
    })
    .transform((value) => (value.length === 0 ? undefined : value)),
});

type HireServiceFormData = yup.InferType<typeof hireServiceSchema>;

export { hireServiceSchema, HireServiceFormData };
