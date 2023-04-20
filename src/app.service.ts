import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }
  private readonly API_KEY = '3PzoEuYikzij4V5wygxBN1kt7b8mKfKe';
  private readonly API_DATA = 'AP01';
  private readonly API_URL = 'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?';
  private readonly DATA_URL = 'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=3PzoEuYikzij4V5wygxBN1kt7b8mKfKe&searchdate=20230420&data=AP01'

  getHello(): string {
    return 'Hello World!!!!!!!!!!!';
  }
  async get_exchange1(): Promise<string> {
    const products = await this.httpService.get(this.DATA_URL).toPromise();
    console.log(products.data);
    return products.data;
    // return "hello";
  }

  async get_exchange2(date: string): Promise<string> {
    const url = this.API_URL
      + 'authkey=' + this.API_KEY
      + '&searchdate=' + date
      + '&data=' + this.API_DATA;

    const products = await this.httpService.get(url).toPromise();
    console.log(products.data);
    return products.data;
  }
}
