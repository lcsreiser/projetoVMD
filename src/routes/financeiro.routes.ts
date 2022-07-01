import { Router } from "express";
import { financeiroController } from "../controllers";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import verifyOwner from "../middlewares/verifyOwner.middleware";
import { createFinanceiroSchema } from "../schemas";

const route = Router();

route.post(
  "",
  validateSchemaMiddleware(createFinanceiroSchema),
  verifyOwner,
  financeiroController.create
);
route.get("", financeiroController.getAll);
route.patch("/:id", financeiroController.update);
route.delete("/:id", financeiroController.delete);

export default route;
