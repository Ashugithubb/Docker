import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import AppEntity from './entities/app.entity';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forFeature([AppEntity]), TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get<string>('DB_HOST'),
      port: +configService.get<string>('DB_PORT'),
      username: configService.get<string>('DB_USERNAME'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_DATABASE'),
      entities: [AppEntity],
      synchronize: false,
      migrations: ['dist/migrations/**/*.js'],
    }),
  }), MailerModule.forRootAsync({
    useFactory: async () => ({
      transport: {
        host: process.env.SMTP_HOST || 'mailhog',
        port: parseInt(process.env.SMTP_PORT, 10) || 1025,
        secure: false,
      },
      defaults: {
        from: '"Test App" <test@example.com>',
      },
    }),
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
