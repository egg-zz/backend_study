import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantInput {
  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  phone: string;
}
