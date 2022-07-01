import "express-async-errors";
import { NextFunction, Request, Response } from "express";
import { Cliente } from "../entities/Cliente";
import { clienteRepository } from "../repositories";
import { ErrorHandler } from "../errors/appError";

const verifyOwner = async (req: Request, _: Response, next: NextFunction) => {
  const foundCliente: Cliente | null = await clienteRepository.findOne({
    cpf: (req.validated as Cliente).cpf,
  });

  if (foundCliente) {
    return next();
  }

  throw new ErrorHandler(
    409,
    `CPF ${(req.validated as Cliente).cpf} não cadastrado`
  );
};

export default verifyOwner;
