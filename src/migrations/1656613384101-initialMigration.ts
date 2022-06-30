import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1656613384101 implements MigrationInterface {
    name = 'initialMigration1656613384101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "financeiro" ("financeiroId" uuid NOT NULL DEFAULT uuid_generate_v4(), "cpf" character varying NOT NULL, "tipo" character varying NOT NULL, "valor" integer NOT NULL, "data" character varying NOT NULL, "ownerClienteId" uuid, CONSTRAINT "PK_8e8043109c9288f43a1f7b43ed2" PRIMARY KEY ("financeiroId"))`);
        await queryRunner.query(`CREATE TABLE "clientes" ("clienteId" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "cpf" character varying NOT NULL, "cep" character varying NOT NULL, "logradouro" character varying NOT NULL, "cidade" character varying NOT NULL, "uf" character varying NOT NULL, "ddd" integer NOT NULL, "numero" integer NOT NULL, "saldo_conta" integer NOT NULL, CONSTRAINT "UQ_fd1214820b9f05720b26a917630" UNIQUE ("cpf"), CONSTRAINT "PK_f09858eaddc48bd0cbfd34ca475" PRIMARY KEY ("clienteId"))`);
        await queryRunner.query(`ALTER TABLE "financeiro" ADD CONSTRAINT "FK_164af0d528adc5a3eb985f7e587" FOREIGN KEY ("ownerClienteId") REFERENCES "clientes"("clienteId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "financeiro" DROP CONSTRAINT "FK_164af0d528adc5a3eb985f7e587"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
        await queryRunner.query(`DROP TABLE "financeiro"`);
    }

}
