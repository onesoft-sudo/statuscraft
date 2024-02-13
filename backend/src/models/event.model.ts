import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from "typeorm";
import Incident from "./incident.model";

export enum EventType {
    Investigating = "investigating",
    Identified = "identified",
    Resolved = "resolved",
    Verifying = "verifying",
    DeployingFix = "deploying_fix",
}

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: EventType,
    })
    type: EventType;

    @Column()
    description: string;

    @ManyToOne(() => Incident)
    incident: Incident;

    @CreateDateColumn({
        name: "created_at",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updated_at",
    })
    updatedAt: Date;
}
