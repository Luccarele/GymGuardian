"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const member_entity_1 = require("../members/entities/member.entity");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
const dataSourceOptions = {
    type: "postgres",
    host: configService.get("DB_HOST"),
    port: +configService.get("DB_PORT"),
    username: configService.get("DB_USERNAME"),
    password: configService.get("DB_PASSWORD"),
    database: configService.get("DB_NAME"),
    entities: [member_entity_1.MemberEntity],
    migrations: [__dirname + "/migrations/*.ts"],
    synchronize: false,
};
exports.default = new typeorm_1.DataSource(dataSourceOptions);
//# sourceMappingURL=typeorm.migration-config.js.map