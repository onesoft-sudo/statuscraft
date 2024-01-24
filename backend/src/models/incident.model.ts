import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Service from "./service.model";
import User from "./user.model";

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
        nullable: true
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

    @CreateDateColumn({
        name: "created_at",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updated_at",
    })
    updatedAt: Date;
}
