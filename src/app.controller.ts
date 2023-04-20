import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('exchange')
  get_exchange1(): Promise<string> {
    return this.appService.get_exchange1();
  }

  @Post('exchange')
  get_exchange2(@Body('date') date: string): Promise<string> {
    return this.appService.get_exchange2(date);
  }
}
