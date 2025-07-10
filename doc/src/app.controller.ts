import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import AppEntity from './entities/app.entity';
import { Repository } from 'typeorm';
import Userdto from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
     
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
  @Post()
  async addUser(@Body() userdto:Userdto){
      return await this.appService.addUser(userdto);
  }
  @Get('mail')
  async sendTestEmail(){
    return this.appService.sendTestEmail();
  }
}
