import { IDrink } from "./IDrink";

export interface ICoffeShop {
  coffePreviewImage: any,
  coffeOutsideImage: any,
  name: string,
  address: string,
  id: number,
  assortment: IDrink[]
}