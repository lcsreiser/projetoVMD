import { DeleteResult, Repository, UpdateResult } from "typeorm";
import AppDataSource from "../data-source";
import { Cliente } from "../entities/Cliente";

interface IClienteRepo {
  save: (cliente: Partial<Cliente>) => Promise<Cliente>;
  all: () => Promise<Cliente[]>;
  findOne: (payload: object) => Promise<Cliente>;
  findOneBy: (payload: object) => Promise<Cliente>;
  delete: (id: string) => Promise<DeleteResult>;
  update: (uuid: string, payload: object) => Promise<UpdateResult>;
}

class ClienteRepo implements IClienteRepo {
  private repo: Repository<Cliente>;

  constructor() {
    this.repo = AppDataSource.getRepository(Cliente);
  }

  save = async (cliente: Partial<Cliente>) => await this.repo.save(cliente);

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

export default new ClienteRepo();
