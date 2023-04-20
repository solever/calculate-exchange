import { HttpService } from '@nestjs/axios';
export declare class AppService {
    private readonly httpService;
    constructor(httpService: HttpService);
    private readonly API_KEY;
    private readonly API_DATA;
    private readonly API_URL;
    private readonly DATA_URL;
    getHello(): string;
    get_exchange1(): Promise<string>;
    get_exchange2(date: string): Promise<string>;
}
