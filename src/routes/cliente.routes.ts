import { Router } from "express";
import { clienteController } from "../controllers";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import verifyClienteExists from "../middlewares/verifyClienteExists.middleware";
import { createClienteSchema } from "../schemas/cliente";

const route = Router();

route.post(
  "",
  validateSchemaMiddleware(createClienteSchema),
  verifyClienteExists,
  clienteController.create
);

route.get("", clienteController.getAll);

route.patch("/:cpf", clienteController.update);

route.delete("/:cpf", clienteController.delete);

export default route;
