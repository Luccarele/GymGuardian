import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MemberEntity } from "src/members/entities/member.entity";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get<string>("DB_HOST"),
        port: +configService.get<number>("DB_PORT"),
        username: configService.get<string>("DB_USERNAME"),
        password: configService.get<string>("DB_PASSWORD"),
        database: configService.get<string>("DB_NAME"),
        entities: [MemberEntity],
        migrations: [__dirname + "/migrations/*.ts"],
        synchronize: false,
        logging: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DbModule {}
