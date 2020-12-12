import { ICoffeShop } from "../../data/ICoffeShop";

export interface IAppState {
  login: boolean,
  user: IUserState,
  coffeShopsData: ICoffeShop[]
};

export interface IUserState {
  name: string,
  photo: any
}