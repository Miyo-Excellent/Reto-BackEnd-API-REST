import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { envs } from './envs';
import { JokesModule } from './jokes/jokes.module';
import { ChuckNorrisModule } from './chuck-norris/chuck-norris.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(envs.mongoDbConnection, {
      dbName: envs.mongoDbName,
    }),
    JokesModule,
    ChuckNorrisModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
