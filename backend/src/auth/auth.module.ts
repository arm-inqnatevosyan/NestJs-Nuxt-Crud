import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Authcontroller } from './auth.controller';
import { AuthService } from './auth.service';
import { Auth } from './auth.entity';
import { AuthDto } from './Dto/auth-dto';

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
