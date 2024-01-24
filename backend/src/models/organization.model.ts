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

@Entity()
export default class Organization extends BaseEntity {
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

    @ManyToMany(() => User, (user) => user.organizations)
    users: User[];

    @OneToMany(() => Service, (service) => service.organization)
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
