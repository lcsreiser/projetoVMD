import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { clienteRepository } from "../repositories";
import {
  serializedCreateClienteSchema,
  serializedGetClienteSchema,
} from "../schemas";

import { Cliente } from "../entities";
import * as dotenv from "dotenv";

dotenv.config();

interface IClienteUpdated {
  nome?: string;
  cep?: string;
  logradouro?: string;
  cidade?: string;
  uf?: string;
  ddd?: number;
  numero?: number;
  saldo_conta?: number;
}

class ClienteService {
  create = async ({ validated }: Request): Promise<AssertsShape<any>> => {
    const cliente: Cliente = await clienteRepository.save({
      ...(validated as Cliente),
    });

    return await serializedCreateClienteSchema.validate(cliente, {
      stripUnknown: true,
    });
  };

  getAll = async () => {
    const clientes = await clienteRepository.all();

    return await serializedGetClienteSchema.validate(clientes, {
      stripUnknown: true,
    });
  };

  update = async (cpf: string, infoToUpdated: IClienteUpdated) => {
    const clienteUpdated = await clienteRepository.findOneBy({
      cpf: cpf,
    });
    await clienteRepository.update(clienteUpdated.clienteId, infoToUpdated);
    const clienteResponse = await clienteRepository.findOneBy({
      cpf: cpf,
    });

    return await serializedCreateClienteSchema.validate(clienteResponse, {
      stripUnknown: true,
    });
  };

  delete = async ({ params }: Request) => {
    const cliente: Cliente | null = await clienteRepository.findOne({
      cpf: params.cpf,
    });

    if (cliente === null) return null;

    await clienteRepository.delete(cliente.clienteId);

    return true;
  };
}

export default new ClienteService();
