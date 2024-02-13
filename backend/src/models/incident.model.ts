import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Service from "./service.model";
import User from "./user.model";
import { Event } from "./event.model";
import { ServiceStatus } from "src/types/ServiceStatus";

@Entity()
export default class Incident extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "text",
    })
    title: string;

    @Column({
        type: "text",
        nullable: true,
    })
    description?: string;

    @ManyToOne(() => User, {
        cascade: ["remove"],
    })
    createdBy: User;

    @Column()
    createdById: number;

    @ManyToMany(() => Service, (service) => service.incidents, {
        cascade: ["remove"],
    })
    services: Service[];

    @Column({
        type: "enum",
        enum: ServiceStatus,
        enumName: "incident_service_status",
        array: true,
        default: [],
    })
    serviceStatuses: ServiceStatus[];

    @OneToMany(() => Event, (event) => event.incident, {
        cascade: ["remove"],
    })
    events: Event[];

    @CreateDateColumn({
        name: "created_at",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updated_at",
    })
    updatedAt: Date;
}
