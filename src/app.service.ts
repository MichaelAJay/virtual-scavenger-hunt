import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async checkPrismaInjection() {
    const ret = await this.prismaService.dummyMethod();
    return ret;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
