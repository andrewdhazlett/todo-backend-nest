import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTodos1532545142184 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "todos" ("id" SERIAL NOT NULL, "url" character varying DEFAULT NULL, "title" character varying NOT NULL, "completed" boolean NOT NULL, "order" integer DEFAULT NULL, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "todos"`);
  }
}
