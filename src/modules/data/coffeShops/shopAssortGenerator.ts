import { IDrink } from '../../../types/data/IDrink';
import { randomMath } from '../../others/randomMath';
import { drinksArr } from './arrs/drinksArr';
import { coffePhotosArr } from './arrs/coffePhotosArr';

export function shopAssortGenerator(): IDrink[] {
  const arr = [];
  for (let i = 1; i <= randomMath(6, 10); i++) {
    const drinkNow = drinksArr[randomMath(0, drinksArr.length - 1)];
    const photoArr = coffePhotosArr[drinkNow.name];
    drinkNow.image = photoArr[randomMath(0, photoArr.length - 1)];
    arr.push(drinkNow);
  }
  return arr;
}