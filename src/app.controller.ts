import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('prisma-status')
  getPrismaStatus(): Promise<string> {
    return this.appService.checkPrismaInjection();
  }
}
