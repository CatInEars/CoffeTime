import { IDrink } from '../../../types/data/IDrink';
import { randomMath } from '../../others/randomMath';
import { drinksArr } from './arrs/drinksArr';

export function shopAssortGenerator(): IDrink[] {
  const arr = [];
  for (let i = 1; i <= randomMath(6, 10); i++) {
    arr.push(drinksArr[randomMath(0, drinksArr.length - 1)]);
  }
  return arr;
}