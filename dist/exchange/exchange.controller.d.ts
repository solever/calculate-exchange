import { ExchangeService } from './exchange.service';
export declare class ExchangeController {
    private readonly exchangeSvc;
    constructor(exchangeSvc: ExchangeService);
    get_exchange(): string;
}
