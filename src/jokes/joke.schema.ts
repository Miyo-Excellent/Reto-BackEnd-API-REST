import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaType } from 'mongoose';

export type JokeDocument = HydratedDocument<Joke>;

@Schema({ timestamps: true, collection: 'jokes' })
export class Joke {
  @Prop({ type: String })
  icon_url: string;

  @Prop({ type: String })
  url: string;

  @Prop({ type: String })
  value: string;
}

export const JokeSchema: SchemaType<Joke> = SchemaFactory.createForClass(Joke);

export const jokeSchemaModule = {
  name: Joke.name,
  schema: JokeSchema,
};
