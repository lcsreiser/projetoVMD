import { Express } from "express";
import financeiroRoutes from "./financeiro.routes";
import clientesRoutes from "./cliente.routes";

const registerRouters = (app: Express): void => {
  app.use("/clientes", clientesRoutes);
  app.use("/financeiro", financeiroRoutes);
};
export default registerRouters;
