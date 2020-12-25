import { IDrink } from '../../../types/data/IDrink';
import { randomMath } from '../../others/randomMath';
import { drinksArr } from './arrs/drinksArr';

export function shopAssortGenerator(): IDrink[] {
  const arr = [];
  for (let i = 1; i <= randomMath(6, 8); i++) {
    const drink = {...drinksArr[randomMath(0, drinksArr.length - 1)]};
    drink.image = drink.image[randomMath(0, drink.image.length - 1)];
    arr.push(drink);
  }
  return arr;
}