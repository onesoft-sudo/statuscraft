import "dotenv/config";

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import configuration from "./config/configuration";
import { IncidentController } from "./incident/incident.controller";
import { UsersModule } from "./users/users.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
        }),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            migrationsTableName: process.env.DB_MIGRATION_TABLE,
            entities: ["dist/**/*.model.js"],
            synchronize: !!process.env.DB_AUTO_SYNC,
            logging: !!process.env.DEBUG,
        }),
        AuthModule,
        UsersModule,
    ],
    controllers: [AppController, IncidentController],
    providers: [AppService],
})
export class AppModule {}
