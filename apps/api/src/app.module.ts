import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { PostModule } from './post/post.module';
// import { PostService } from './post/post.service';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456abcde',
      database: 'reactquery',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RecipesModule,
    // PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
