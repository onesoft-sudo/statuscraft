import { Injectable } from "@nestjs/common";
import User from "src/models/user.model";

@Injectable()
export class UsersService {
    findByUsername(username: string) {
        return User.findOne({
            where: {
                username,
            },
            relations: {
                organizations: true,
            },
        });
    }
}
