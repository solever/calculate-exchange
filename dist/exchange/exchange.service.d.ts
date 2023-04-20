import { HttpService } from '@nestjs/axios';
export declare class ExchangeService {
    private readonly httpService;
    private readonly DATA_URL;
    constructor(httpService: HttpService);
    get_exchange(): string;
}
