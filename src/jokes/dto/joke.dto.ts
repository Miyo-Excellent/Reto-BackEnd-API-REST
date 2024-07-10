import { ApiProperty } from '@nestjs/swagger';

export class JokeDto {
  @ApiProperty({ description: 'URL del icono del chiste' })
  icon_url: string;

  @ApiProperty({ description: 'URL del chiste' })
  url: string;

  @ApiProperty({ description: 'Contenido del chiste' })
  value: string;
}
