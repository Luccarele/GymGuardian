import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MemberEntity } from "./members/entities/member.entity";
import { MemberModule } from "./members/member.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: [MemberEntity],
      synchronize: true,
      logging: true,
    }),
    MemberModule,
    TypeOrmModule.forFeature([MemberEntity]),
  ],

  /*[ConfigModule.forRoot({ // Environment variables access
    isGlobal: true,
  }), MemberModule, DbModule],*/ //? this is for SQL database.

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
