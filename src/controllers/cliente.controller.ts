import { Request, Response } from "express";
import { clienteService } from "../services";

class ClienteController {
  create = async (req: Request, res: Response) => {
    const cliente = await clienteService.create(req);

    return res.status(201).json(cliente);
  };

  getAll = async (_: Request, res: Response) => {
    const clientes = await clienteService.getAll();

    return res.status(200).json({ clientes });
  };

  update = async (req: Request, res: Response) => {
    const cpf = req.params["cpf"];
    req.body.cpf = cpf;
    const infoToUpdated = req.body;
    const cliente = await clienteService.update(cpf, infoToUpdated);

    return res.status(200).json(cliente);
  };

  delete = async (req: Request, res: Response) => {
    const cliente = await clienteService.delete(req);

    cliente
      ? res.status(202).json("Cliente deletado com sucesso")
      : res.status(404).json({ error: "Cliente não encontrado" });
  };
}

export default new ClienteController();
