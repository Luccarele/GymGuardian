"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentTable1721841158411 = void 0;
class StudentTable1721841158411 {
    async up(queryRunner) {
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
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE IF EXISTS "student"`);
    }
}
exports.StudentTable1721841158411 = StudentTable1721841158411;
//# sourceMappingURL=1721841158411-StudentTable.js.map