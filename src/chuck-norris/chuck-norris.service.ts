import { Injectable } from '@nestjs/common';
import { ChuckNorrisJokeModel } from './chuckNorrisJoke.model';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('chuck norris')
@Injectable()
export class ChuckNorrisService {
  private baseURL: string = 'https://api.chucknorris.io/jokes';

  constructor(private http: HttpService) {}

  async getRandomJoke(): Promise<ChuckNorrisJokeModel> {
    try {
      const response = await firstValueFrom(
        this.http.get(`${this.baseURL}/random`),
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getRandomJokeByCategory(category: string): Promise<string> {
    try {
      const response = await firstValueFrom(
        this.http.get(`${this.baseURL}/random?category=${category}`),
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async searchJokes(query: string): Promise<ChuckNorrisJokeModel[]> {
    try {
      const response = await firstValueFrom(
        this.http.get(`${this.baseURL}/search?query=${query}`),
      );
      return response.data.result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getCategories(): Promise<string[]> {
    try {
      const response = await firstValueFrom(
        this.http.get(`${this.baseURL}/categories`),
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
