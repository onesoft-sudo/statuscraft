import {
    ArgumentMetadata,
    BadRequestException,
    Body,
    Controller,
    ForbiddenException,
    Get,
    Param,
    Post,
} from "@nestjs/common";
import Incident from "../models/incident.model";
import { CreateIncidentDTO } from "./incident.dto";
import Service from "../models/service.model";
import { In } from "typeorm";
import { ServiceStatus } from "src/types/ServiceStatus";

@Controller("/incidents")
export class IncidentController {
    @Get("/organizations/:org")
    async index(@Param("org") orgId: string) {
        const id = parseInt(orgId);

        if (isNaN(id)) {
            throw new BadRequestException({
                message: "'/:org' must be numeric",
            });
        }

        const incidents = await Incident.find({
            where: {
                services: {
                    organization: {
                        id,
                    },
                },
                events: true,
            },
            relations: {
                services: true,
            },
        });

        return {
            incidents,
        };
    }

    @Get("/abc")
    async abc() {
        const incident = await Incident.findOne({
            where: {
                id: 5,
            },
            relations: {
                services: {
                    organization: true,
                },
            },
        });

        incident.serviceStatuses = [ServiceStatus.Degraded];
        return await incident.save();
    }

    @Get("/:id")
    async show(@Param("id") id: string) {
        const incident = await Incident.findOne({
            where: {
                id: parseInt(id),
            },
            relations: {
                services: {
                    organization: true,
                },
                events: true,
            },
        });

        if (!incident) {
            throw new BadRequestException({
                message: "Incident not found.",
            });
        }

        return {
            incident,
        };
    }

    @Post("/")
    async store(
        @Param("org", {
            transform(value: any, metadata: ArgumentMetadata): any {
                return parseInt(value);
            },
        })
        organizationId: number,
        @Body() createIncidentDTO: CreateIncidentDTO,
    ) {
        if (isNaN(organizationId)) {
            throw new BadRequestException({
                message: "'/:org' must be numeric",
            });
        }

        if (createIncidentDTO.serviceIds.find((id) => typeof id !== "number")) {
            throw new BadRequestException({
                message: "'serviceIds[]' must be an array of numbers",
            });
        }

        const services = await Service.find({
            where: {
                organization: {
                    id: organizationId,
                },
                id: In(createIncidentDTO.serviceIds),
            },
        });

        if (services.length !== createIncidentDTO.serviceIds.length) {
            throw new ForbiddenException({
                message: "You don't have permission to perform this action",
            });
        }

        const incident = new Incident();

        incident.title = createIncidentDTO.title;
        incident.description = createIncidentDTO.description;
        incident.services = services;
        incident.createdById = 1;

        await incident.save();

        return {
            incident,
        };
    }
}
