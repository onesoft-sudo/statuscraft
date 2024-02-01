import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    UnauthorizedException,
    UseGuards,
} from "@nestjs/common";
import { LoginDTO } from "./auth.dto";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post("login")
    async login(@Body() loginDTO: LoginDTO) {
        const { data, failed } = await this.authService.login(
            loginDTO.username,
            loginDTO.password,
        );

        if (failed) {
            throw new UnauthorizedException();
        }

        return data;
    }

    @UseGuards(AuthGuard)
    @Get("validate")
    async validate() {
        return { success: true };
    }
}
