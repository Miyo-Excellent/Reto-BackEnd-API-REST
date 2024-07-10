import { Module } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { JokesController } from './jokes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { jokeSchemaModule } from './joke.schema';

@Module({
  imports: [MongooseModule.forFeature([jokeSchemaModule])],
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {}
