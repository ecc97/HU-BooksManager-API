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
exports.UsersController = void 0;
class UsersController {
    constructor(urlApi = 'http://190.147.64.47:5155/') {
        this.urlApi = urlApi;
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointCreateUser = 'api/v1/users';
            console.log(this.urlApi);
            const headers = {
                'Content-Type': 'application/json'
            };
            const reqOptions = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(user)
            };
            const url = this.urlApi + endpointCreateUser;
            const result = yield fetch(url, reqOptions);
            console.log(`Status code: ${result.status}`);
            if (result.status !== 201) {
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error create User');
            }
            const responseBodyCreateUser = yield result.json();
            return responseBodyCreateUser;
        });
    }
    getUsers(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointUsers = 'api/v1/users';
            console.log(this.urlApi);
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            const reqOptions = {
                method: 'GET',
                headers: headers
            };
            const url = this.urlApi + endpointUsers;
            const result = yield fetch(url, reqOptions);
            console.log(`Status code: ${result.status}`);
            if (result.status !== 200) {
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error get Users');
            }
            const responseBodyUsers = yield result.json();
            return responseBodyUsers;
        });
    }
}
exports.UsersController = UsersController;
