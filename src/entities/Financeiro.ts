import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Cliente } from "./Cliente";

@Entity("financeiro")
export class Financeiro {
  @PrimaryGeneratedColumn("uuid")
  financeiroId?: string;

  @Column()
  cpf: string;

  @Column()
  tipo: string;

  @Column()
  valor: number;

  @Column()
  data: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.financeiro)
  owner: Cliente;
}
