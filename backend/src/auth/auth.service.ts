import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async login(username: string, enteredPassword: string) {
        const user = await this.usersService.findByUsername(username);

        if (!user) {
            return {
                failed: true,
            };
        }

        if (!bcrypt.compareSync(enteredPassword, user.password)) {
            return {
                failed: true,
            };
        }

        const { password, token: oldToken, ...result } = user;
        const payload = { sub: user.id, username: user.username };
        let token: string;

        try {
            await this.jwtService.verifyAsync(oldToken);
            token = oldToken;
        } catch (error) {
            token = await this.jwtService.signAsync(payload);
            user.tokenCreatedAt = new Date();
            user.token = token;
            await user.save();
        }

        return {
            data: {
                access_token: token,
                user: result,
            },
        };
    }
}
