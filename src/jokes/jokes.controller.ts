import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { JokesService } from './jokes.service';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';
import { JokeDocument } from './joke.schema';
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
import { JokeDto } from './dto/joke.dto';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @ApiBody({ required: true })
  @ApiResponse({ status: 201, description: 'Chiste creado', type: JokeDto })
  @ApiResponse({ status: 400, description: 'Error al crear el chiste' })
  @Post()
  create(@Body() createJokeDto: CreateJokeDto) {
    return this.jokesService.create(createJokeDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Chistes encontrados',
    type: [JokeDto],
  })
  @ApiResponse({ status: 404, description: 'Chistes no encontrados' })
  @Get()
  findAll(): Promise<JokeDocument[]> {
    return this.jokesService.findAll();
  }

  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Chiste encontrado', type: JokeDto })
  @ApiResponse({ status: 404, description: 'Chiste no encontrado' })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<JokeDocument> {
    return this.jokesService.findOne(id);
  }

  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: 200,
    description: 'Chiste actualizado',
    type: JokeDto,
  })
  @ApiResponse({ status: 404, description: 'Chiste no actualizado' })
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateJokeDto: UpdateJokeDto,
  ): Promise<JokeDocument> {
    return this.jokesService.update(id, updateJokeDto);
  }

  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Chiste eliminado' })
  @ApiResponse({ status: 404, description: 'Chiste no eliminado' })
  @Delete(':id')
  remove(@Param('id') id: number): Promise<any> {
    return this.jokesService.remove(id);
  }
}
