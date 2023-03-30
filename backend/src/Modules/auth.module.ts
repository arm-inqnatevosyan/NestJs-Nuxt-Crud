import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Authcontroller } from '../Controllers/auth.controller';
import { AuthService } from '../Services/auth.service';
import { Auth } from '../Entitys/auth.entity';
import { AuthDto } from '../Dtos/auth.dto';

@Module({
  providers: [AuthService],
  controllers: [Authcontroller],
  imports: [
    TypeOrmModule.forFeature([Auth, AuthDto]),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule {}
