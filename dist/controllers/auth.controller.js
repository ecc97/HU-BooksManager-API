var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class AuthController {
    constructor(urlApi = 'http://190.147.64.47:5155/') {
        this.urlApi = urlApi;
    }
    postLogin(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointLogin = 'api/v1/auth/login';
            console.log(this.urlApi);
            const headers = {
                'Content-Type': 'application/json'
            };
            const reqOptions = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            };
            const url = this.urlApi + endpointLogin;
            const result = yield fetch(url, reqOptions);
            console.log(`Status code: ${result.status}`);
            if (result.status !== 201) {
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('No Authenticated');
            }
            const responseBodyLogin = yield result.json();
            return responseBodyLogin;
        });
    }
}
