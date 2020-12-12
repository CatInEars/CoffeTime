import { ICoffeType } from "./ICoffeType";

export interface IDrink {
  name: string,
  type: ICoffeType,
  image: any,
  price: string,
  popular: boolean,
  favorite: boolean,
  structure: {
    milk: number | undefined,
    coffe: number | undefined,
    time: number,
    temperature: number
  }
}