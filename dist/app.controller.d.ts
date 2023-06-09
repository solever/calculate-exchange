import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    get_exchange1(): Promise<string>;
    get_exchange2(date: string): Promise<string>;
}
