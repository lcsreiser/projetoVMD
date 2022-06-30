import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { Financeiro } from "../entities";
import { financeiroRepository } from "../repositories";
import {
  serializedCreateFinanceiroSchema,
  serializedGetFinanceiroSchema,
} from "../schemas";

interface IFinanceiroUpdated {
  cpf?: string;
  tipo?: string;
  valor?: number;
  data?: string;
}

class FinanceiroService {
  create = async ({ validated }: Request): Promise<AssertsShape<any>> => {
    const financeiro: Financeiro = await financeiroRepository.save({
      ...(validated as Financeiro),
    });

    return await serializedCreateFinanceiroSchema.validate(financeiro, {
      stripUnknown: true,
    });
  };

  getAll = async () => {
    const financeiro = await financeiroRepository.all();

    return await serializedGetFinanceiroSchema.validate(financeiro, {
      stripUnknown: true,
    });
  };

  update = async (id: string, infoToUpdated: IFinanceiroUpdated) => {
    const financeiroUpdated = await financeiroRepository.findOneBy({
      financeiroId: id,
    });
    await financeiroRepository.update(
      financeiroUpdated.financeiroId,
      infoToUpdated
    );
    const financeiroResponse = await financeiroRepository.findOneBy({
      financeiroId: id,
    });

    return await serializedCreateFinanceiroSchema.validate(financeiroResponse, {
      stripUnknown: true,
    });
  };

  delete = async ({ params }: Request) => {
    const financeiro: Financeiro | null = await financeiroRepository.findOne({
      financeiroId: params.id,
    });

    if (financeiro === null) return null;

    await financeiroRepository.delete(financeiro.financeiroId);

    return true;
  };
}

export default new FinanceiroService();
