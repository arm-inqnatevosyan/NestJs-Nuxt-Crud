import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.entity/user.entity';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { Comments } from './comments/comments/comments.entity';
import 'dotenv/config';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/auth.entity';
import { AuthDto } from './auth/Dto/auth-dto';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_Host,
      port: parseInt(process.env.DB_Port) || 3306,
      username: process.env.DB_User,
      password: process.env.DB_Password,
      database: process.env.DB_Database,
      entities: [User, Comments, Auth, AuthDto],
      synchronize: true,
    }),
    UsersModule,
    CommentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
