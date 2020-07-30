import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { YupValidationPipe } from 'nestjs-yup';
import { AuthCredentialsDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getHello(
    @Body(YupValidationPipe) dto: AuthCredentialsDto,
  ): Promise<AuthCredentialsDto> {
    return dto;
  }

}
