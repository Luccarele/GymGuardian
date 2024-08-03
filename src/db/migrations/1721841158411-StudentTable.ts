import { MigrationInterface, QueryRunner } from "typeorm";

export class StudentTable1721841158411 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "student" (
                id varchar(21),
                "completeName" varchar(255) NOT NULL,
                "gender" varchar(255) NOT NULL,
                "address" varchar(255) NOT NULL,
                "phoneNumber" varchar(255) NOT NULL,
                "email" varchar(255) NOT NULL,
                "registrationDate" date NOT NULL,
                "plan" varchar(255) NOT NULL,
                "paymentStatus" varchar(255) NOT NULL,
                "authorizationAndTherms" boolean NOT NULL,
                CONSTRAINT studentPk PRIMARY KEY (id)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "student"`);
    }

}
