import { ObjectType, Repository, UpdateResult, DeleteResult } from "typeorm";
import AppDataSource from "../data-source";
import { Financeiro } from "../entities/Financeiro";

interface IFinanceiroRepo {
  save: (financeiro: Financeiro) => Promise<Financeiro>;
  all: () => Promise<Financeiro[]>;
  findOne: (payload: object) => Promise<Financeiro>;
  findOneBy: (payload: object) => Promise<Financeiro>;
  delete: (id: string) => Promise<DeleteResult>;
  update: (uuid: string, payload: object) => Promise<UpdateResult>;
}

class FinanceiroRepository implements IFinanceiroRepo {
  private repo: Repository<Financeiro>;

  constructor() {
    this.repo = AppDataSource.getRepository(Financeiro);
  }

  save = async (financeiro: Financeiro) => await this.repo.save(financeiro);

  all = async () => await this.repo.find();

  findOne = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  findOneBy = async (payload: object) =>
    await this.repo.findOneBy({ ...payload });

  delete = async (id: string): Promise<DeleteResult> =>
    await this.repo.delete(id);

  update = async (uuid: string, payload: object) =>
    await this.repo.update(uuid, { ...payload });
}

export default new FinanceiroRepository();
