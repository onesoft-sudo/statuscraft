import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Incident from "./incident.model";
import Organization from "./organization.model";
import User from "./user.model";

@Entity()
export default class Service extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "text",
    })
    name?: string;

    @ManyToOne(() => User, {
        cascade: ["remove"],
    })
    createdBy: User;

    @JoinTable()
    @ManyToMany(() => Incident, (incident) => incident.services)
    incidents: Incident[];

    @ManyToOne(() => Organization)
    organization: Organization;

    @CreateDateColumn({
        name: "created_at",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updated_at",
    })
    updatedAt: Date;
}
