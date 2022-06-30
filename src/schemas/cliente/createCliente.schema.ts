import * as yup from "yup";

const cpfRegex = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;
const zipCodeRegex = /^([\d]{8})$/; //XX.XXX-XXX | XXXXXXX

// const createClienteSchema = yup.object().shape({
//   nome: yup.string().required(),
//   cpf: yup
//     .string()
//     .matches(cpfRegex, "O CPF deve estar no fomato XXX.XXX.XXX-XX")
//     .required(),
//   address: yup.object().shape({
//     zipCode: yup
//       .string()
//       .matches(
//         zipCodeRegex,
//         "Incorrect zip code, must be in this format XXXXXXX, max 8 numbers"
//       )
//       .required(),
//     street: yup.string().required(),
//     city: yup.string().required(),
//     uf: yup.string().required(),
//   }),
//   fone: yup.object().shape({
//     ddd: yup.number().required(),
//     numero: yup.number().required(),
//   }),
//   saldo_conta: yup.number().required(),
// });

const createClienteSchema = yup.object().shape({
  nome: yup.string().required(),
  cpf: yup
    .string()
    .matches(cpfRegex, "O CPF deve estar no fomato XXX.XXX.XXX-XX")
    .required(),
  cep: yup
    .string()
    .matches(
      zipCodeRegex,
      "Incorrect zip code, must be in this format XXXXXXX, max 8 numbers"
    )
    .required(),
  logradouro: yup.string().required(),
  cidade: yup.string().required(),
  uf: yup.string().required(),

  ddd: yup.number().required(),
  numero: yup.number().required(),

  saldo_conta: yup.number().required(),
});

const serializedCreateClienteSchema = yup.object().shape({
  clienteId: yup.string().uuid().required(),
  nome: yup.string().required(),
  cpf: yup
    .string()
    .matches(cpfRegex, "O CPF deve estar no fomato XXX.XXX.XXX-XX")
    .required(),
  cep: yup
    .string()
    .matches(
      zipCodeRegex,
      "Incorrect zip code, must be in this format XXXXXXX, max 8 numbers"
    )
    .required(),
  logradouro: yup.string().required(),
  cidade: yup.string().required(),
  uf: yup.string().required(),

  ddd: yup.number().required(),
  numero: yup.number().required(),

  saldo_conta: yup.number().required(),
});

const serializedGetClienteSchema = yup
  .array()
  .of(
    yup.object().shape({
      clienteId: yup.string().uuid().required(),
      nome: yup.string().required(),
      cpf: yup
        .string()
        .matches(cpfRegex, "O CPF deve estar no fomato XXX.XXX.XXX-XX")
        .required(),
      cep: yup
        .string()
        .matches(
          zipCodeRegex,
          "Incorrect zip code, must be in this format XXXXXXX, max 8 numbers"
        )
        .required(),
      logradouro: yup.string().required(),
      cidade: yup.string().required(),
      uf: yup.string().required(),

      ddd: yup.number().required(),
      numero: yup.number().required(),

      saldo_conta: yup.number().required(),
    })
  )
  .nullable();

export {
  createClienteSchema,
  serializedCreateClienteSchema,
  serializedGetClienteSchema,
};
