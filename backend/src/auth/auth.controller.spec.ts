import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { faker } from "@faker-js/faker";

describe("AuthController", () => {
    type LoginResult = Awaited<ReturnType<typeof AuthService.prototype.login>>;

    let controller: AuthController;
    let service: AuthService;
    let expectedUsername: string;
    let expectedPassword: string;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
        }).compile();

        controller = module.get<AuthController>(AuthController);
        expectedUsername = faker.internet.userName();
        expectedPassword = faker.internet.password();
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });

    test("login succeeds with valid credentials", async () => {
        const result = {
            data: {
                access_token: faker.string.hexadecimal({ length: 10 }),
                user: {
                    id: 1,
                    name: faker.person.fullName(),
                    username: expectedUsername,
                    createdAt: new Date(),
                    organizations: [],
                    services: [],
                    updatedAt: new Date(),
                    tokenCreatedAt: new Date(),
                },
            },
        } satisfies LoginResult;

        jest.spyOn(service, "login").mockImplementation(
            async (username, password) => {
                if (
                    username === expectedUsername &&
                    password === expectedPassword
                ) {
                    return result;
                }

                return {
                    failed: true,
                };
            },
        );

        expect(
            controller.login({
                username: expectedPassword,
                password: expectedPassword,
            }),
        ).toBe(result);
    });

    test("login fails without valid credentials", async () => {
        const result = {
            data: {
                access_token: faker.string.hexadecimal({ length: 10 }),
                user: {
                    id: 1,
                    name: faker.person.fullName(),
                    username: expectedUsername,
                    createdAt: new Date(),
                    organizations: [],
                    services: [],
                    updatedAt: new Date(),
                    tokenCreatedAt: new Date(),
                },
            },
        } satisfies LoginResult;

        jest.spyOn(service, "login").mockImplementation(
            async (username, password) => {
                if (
                    username === expectedUsername &&
                    password === expectedPassword
                ) {
                    return result;
                }

                return {
                    failed: true,
                };
            },
        );

        expect(
            controller.login({
                username: null,
                password: null,
            }),
        ).toThrow();

        expect(
            controller.login({
                username: "",
                password: "",
            }),
        ).toThrow();

        expect(
            controller.login({
                username: "test",
                password: "",
            }),
        ).toThrow();

        expect(
            controller.login({
                username: "",
                password: "test",
            }),
        ).toThrow();

        expect(
            controller.login({
                username: "test",
                password: "test",
            }),
        ).toThrow();
    });
});
