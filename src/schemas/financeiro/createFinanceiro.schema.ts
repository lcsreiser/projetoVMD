import * as yup from "yup";

const createFinanceiroSchema = yup.object().shape({
  cpf: yup.string().required(),
  tipo: yup.string().required(),
  valor: yup.number().required(),
  data: yup.string().required(),
});

const serializedCreateFinanceiroSchema = yup.object().shape({
  financeiroId: yup.string().uuid().required(),
  cpf: yup.string().required(),
  tipo: yup.string().required(),
  valor: yup.number().required(),
  data: yup.string().required(),
});

const serializedGetFinanceiroSchema = yup
  .array()
  .of(
    yup.object().shape({
      financeiroId: yup.string().uuid().required(),
      cpf: yup.string().required(),
      tipo: yup.string().required(),
      valor: yup.number().required(),
      data: yup.string().required(),
      owner: yup.object().shape({
        nome: yup.string().required(),
        cpf: yup.string().required(),
      }),
    })
  )
  .nullable();

export {
  createFinanceiroSchema,
  serializedCreateFinanceiroSchema,
  serializedGetFinanceiroSchema,
};
