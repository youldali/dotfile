import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitTransaction1741344085654 implements MigrationInterface {
  name = 'InitTransaction1741344085654';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "transaction" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "source_account" character varying NOT NULL,
                "target_account" character varying NOT NULL,
                "externalId" character varying NOT NULL,
                "amount" integer NOT NULL,
                "currency" character varying NOT NULL,
                "metadata" jsonb NOT NULL,
                CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id")
            );
            COMMENT ON COLUMN "transaction"."createdAt" IS 'Creation date';
            COMMENT ON COLUMN "transaction"."updatedAt" IS 'Latest update date'
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "transaction"
        `);
  }
}
