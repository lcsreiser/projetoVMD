import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Financeiro } from "./Financeiro";

@Entity("clientes")
export class Cliente {
  @PrimaryGeneratedColumn("uuid")
  clienteId?: string;

  @Column()
  nome: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  cep: string;

  @Column()
  logradouro: string;

  @Column()
  cidade: string;

  @Column()
  uf: string;

  @Column()
  ddd: number;

  @Column()
  numero: number;

  @Column()
  saldo_conta: number;

  @OneToMany(() => Financeiro, (financeiro) => financeiro.owner, {
    eager: true,
  })
  financeiro: Financeiro[];
}
