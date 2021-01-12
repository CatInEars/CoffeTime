import { ICoffeType } from "./ICoffeType";
import { IStructure } from "./IStructure";

export interface IDrink {
  name: string,
  type: ICoffeType,
  image?: any,
  price: number,
  popular: boolean,
  favorite: boolean,
  structure: IStructure,
  description: string
}