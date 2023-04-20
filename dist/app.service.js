"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
let AppService = class AppService {
    constructor(httpService) {
        this.httpService = httpService;
        this.API_KEY = '3PzoEuYikzij4V5wygxBN1kt7b8mKfKe';
        this.API_DATA = 'AP01';
        this.API_URL = 'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?';
        this.DATA_URL = 'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=3PzoEuYikzij4V5wygxBN1kt7b8mKfKe&searchdate=20230420&data=AP01';
    }
    getHello() {
        return 'Hello World!!!!!!!!!!!';
    }
    async get_exchange1() {
        const products = await this.httpService.get(this.DATA_URL).toPromise();
        console.log(products.data);
        return products.data;
    }
    async get_exchange2(date) {
        const url = this.API_URL
            + 'authkey=' + this.API_KEY
            + '&searchdate=' + date
            + '&data=' + this.API_DATA;
        const products = await this.httpService.get(url).toPromise();
        console.log(products.data);
        return products.data;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map