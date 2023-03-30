import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { User } from './Entitys/user.entity';
import { UsersModule } from './Modules/users.module';
import { CommentsModule } from './Modules/comments.module';
import { Comments } from './Entitys/comments.entity';
import 'dotenv/config';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './Modules/auth.module';
import { Auth } from './Entitys/auth.entity';

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
      entities: [User, Comments, Auth],
      synchronize: true,
    }),
    UsersModule,
    CommentsModule,
    AuthModule,
  ],
})
export class AppModule {}
