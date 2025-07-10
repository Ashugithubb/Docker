import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AppEntity from './entities/app.entity';
import { Repository } from 'typeorm';
import Userdto from './dto/user.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  constructor( @InjectRepository(AppEntity) private readonly userRepo:Repository<AppEntity>,private readonly mailerService: MailerService){}
  getHello() {
    return {message:"Hello World! from backend"}
}
async addUser(userdto:Userdto){
  return await this.userRepo.save(userdto);
}

async sendTestEmail() {
  await this.mailerService.sendMail({
    to: 'itsray650@gmail.com',
    subject: 'Test Email ✔',
    text: 'Hello from MailHog!',
    html: '<b>Hello from MailHog!</b>',
  });
}

}