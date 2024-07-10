import { Controller, Get, Param, Query } from '@nestjs/common';
import { ChuckNorrisJokeModel } from './chuckNorrisJoke.model';
import { ChuckNorrisService } from './chuck-norris.service';

@Controller('chuck-norris')
export class ChuckNorrisController {
  constructor(private readonly chuckNorrisService: ChuckNorrisService) {}

  @Get('random')
  async getRandomJoke(): Promise<ChuckNorrisJokeModel> {
    return this.chuckNorrisService.getRandomJoke();
  }

  @Get('random/:category')
  async getRandomJokeByCategory(
    @Param('category') category: string,
  ): Promise<string> {
    return this.chuckNorrisService.getRandomJokeByCategory(category);
  }

  @Get('search')
  async searchJokes(
    @Query('query') query: string,
  ): Promise<ChuckNorrisJokeModel[]> {
    return this.chuckNorrisService.searchJokes(query);
  }

  @Get('categories')
  async getCategories(): Promise<string[]> {
    return this.chuckNorrisService.getCategories();
  }
}
