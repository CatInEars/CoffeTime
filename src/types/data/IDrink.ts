import { ICoffeType } from "./ICoffeType";

export interface IDrink {
  name: string,
  type: ICoffeType,
  image?: any,
  price: number,
  popular: boolean,
  favorite: boolean,
  structure: {
    milk?: number,
    coffe?: number,
    time: number,
    temperature: number
  }
}