import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }
  private readonly DATA_URL = 'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=3PzoEuYikzij4V5wygxBN1kt7b8mKfKe&searchdate=20230420&data=AP01'

  getHello(): string {
    return 'Hello World!!!!!!!!!!!';
  }
  async get_exchange(): Promise<string> {
    const products = await this.httpService.get(this.DATA_URL).toPromise();
    console.log(products.data);
    return products.data;
    // return "hello";
  }
}
