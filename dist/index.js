"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("./controllers/auth.controller");
const users_controller_1 = require("./controllers/users.controller");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataToLogin = {
            email: 'prueba@prueba.pru',
            password: 'C0ntr4S3gu++r4'
        };
        // const userToRegister: RequestCreateUser = {
        //     name: 'Juan',
        //     lastName: 'Barrientos',
        //     email: 'juanb1@mail.com',
        //     password: 'password777'
        // }
        const roleToUpdate = {
            role: 'user'
        };
        const authController = new auth_controller_1.AuthController();
        const usersController = new users_controller_1.UsersController();
        try {
            const resultLogin = yield authController.postLogin(dataToLogin);
            console.log(resultLogin);
            const token = resultLogin.data.token;
            console.log('Token:', token);
            // const createUserResponse: ResponseCreateUser = await usersController.createUser(userToRegister)
            // console.log(createUserResponse)
            //    const users: ResponseUsers = await usersController.getUsers(token)
            //    console.log(users)
            const roleUpdated = yield usersController.updateRoleUser('5094ec65-2b76-42d4-9332-cf8a6ad80665', roleToUpdate, token);
            console.log(roleUpdated);
        }
        catch (error) {
            console.error(`=( : ${error}`);
        }
    });
}
main();
