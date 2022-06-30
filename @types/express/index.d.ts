import { Financeiro } from "../../src/entities/Financeiro";
import { Cliente } from "../../src/entities/Cliente";

declare global {
  namespace Express {
    interface Request {
      validated: Cliente | Financeiro;
    }
  }
}
