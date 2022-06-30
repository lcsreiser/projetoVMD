import { Request, Response } from "express";
import financeiroService from "../services/financeiro.service";

class FinanceiroController {
  create = async (req: Request, res: Response) => {
    const financeiro = await financeiroService.create(req);

    return res.status(201).json(financeiro);
  };

  getAll = async (_: Request, res: Response) => {
    const financeiro = await financeiroService.getAll();

    return res.status(200).json({ financeiro });
  };

  update = async (req: Request, res: Response) => {
    const id = req.params["id"];
    const infoToUpdated = req.body;

    const financeiro = await financeiroService.update(id, infoToUpdated);

    return res.status(200).json(financeiro);
  };

  delete = async (req: Request, res: Response) => {
    const cliente = await financeiroService.delete(req);

    cliente
      ? res.status(202).json("Financeiro deletado com sucesso")
      : res.status(404).json({ error: "Financeiro não encontrado" });
  };
}

export default new FinanceiroController();
