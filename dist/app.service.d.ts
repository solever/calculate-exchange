import { HttpService } from '@nestjs/axios';
export declare class AppService {
    private readonly httpService;
    constructor(httpService: HttpService);
    private readonly DATA_URL;
    getHello(): string;
    get_exchange(): Promise<string>;
}
