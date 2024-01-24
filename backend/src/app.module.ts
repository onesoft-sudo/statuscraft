import "dotenv/config";

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { IncidentController } from './incident/incident.controller';

@Module({
    imports: [
        ConfigModule.forRoot(),
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
    ],
    controllers: [AppController, IncidentController],
    providers: [AppService],
})
export class AppModule {}
