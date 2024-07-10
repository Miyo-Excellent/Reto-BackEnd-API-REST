import { Injectable } from '@nestjs/common';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';
import { JokeDocument, jokeSchemaModule } from './joke.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('jokes')
@Injectable()
export class JokesService {
  constructor(
    @InjectModel(jokeSchemaModule.name)
    private readonly jokeModel: Model<JokeDocument>,
  ) {}

  @ApiBody({ required: true, type: CreateJokeDto })
  create(createJokeDto: CreateJokeDto): Promise<JokeDocument> {
    const newJoke = new this.jokeModel(createJokeDto);
    return newJoke.save();
  }

  findAll(): Promise<JokeDocument[]> {
    return this.jokeModel.find().exec();
  }

  findOne(id: number): Promise<JokeDocument | null> {
    return this.jokeModel.findById(id).exec();
  }

  update(
    id: number,
    updateJokeDto: UpdateJokeDto,
  ): Promise<JokeDocument | null> {
    return this.jokeModel
      .findByIdAndUpdate(id, updateJokeDto, { new: true })
      .exec();
  }

  remove(id: number): Promise<any> {
    return this.jokeModel.findByIdAndDelete(id).exec();
  }
}
