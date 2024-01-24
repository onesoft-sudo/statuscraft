import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Organization from "./organization.model";
import Service from "./service.model";

@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "text",
    })
    name?: string;

    @Column({
        unique: true,
        type: "varchar",
    })
    username: string;

    @Column({
        type: "text",
    })
    password: string;

    @OneToMany(() => Service, (service) => service.createdBy)
    services: Service[];

    @JoinTable()
    @ManyToMany(() => Organization, (organization) => organization.users)
    organizations: Organization[];

    @CreateDateColumn({
        name: "created_at",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updated_at",
    })
    updatedAt: Date;
}
