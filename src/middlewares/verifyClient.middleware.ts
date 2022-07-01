import "express-async-errors";
import { NextFunction, Request, Response } from "express";
import { Cliente } from "../entities/Cliente";
import { clienteRepository } from "../repositories";
import { ErrorHandler } from "../errors/appError";

const verifyClient = async (req: Request, _: Response, next: NextFunction) => {
  const foundCliente: Cliente | null = await clienteRepository.findOne({
    cpf: (req.validated as Cliente).cpf,
  });

  if (foundCliente) {
    throw new ErrorHandler(
      409,
      `CPF ${(req.validated as Cliente).cpf} já foi cadastrado`
    );
  }

  return next();
};

export default verifyClient;
