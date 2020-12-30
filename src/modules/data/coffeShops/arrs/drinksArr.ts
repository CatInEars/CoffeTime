import { IDrink } from '../../../../types/data/IDrink';
import { coffePhotosArr } from './coffePhotosArr';

const description = 'Итальянский эспрессо – это бархатистая плотная пенка с золотистым отливом, покрывающая всю поверхность кофе. Из Италии с любовью.'

export const drinksArr: IDrink[] = [
  {
    name: 'Cappuchino',
    type: 'кофейный напиток',
    image: coffePhotosArr['Cappuchino'],
    price: 120,
    popular: true,
    favorite: false,
    structure: {
      milk: 15,
      coffe: 25,
      time: 156,
      temperature: 95
    },
    description
  },
  {
    name: 'Latte macchiato',
    type: 'кофейный напиток',
    image: coffePhotosArr['Latte macchiato'],
    price: 149,
    popular: true,
    favorite: false,
    structure: {
      milk: 20,
      coffe: 25,
      time: 180,
      temperature: 90
    },
    description
  },
  {
    name: 'Americano',
    type: 'кофейный напиток',
    image: coffePhotosArr['Americano'],
    price: 99,
    popular: false,
    favorite: false,
    structure: {
      coffe: 35,
      time: 140,
      temperature: 90
    },
    description
  },
  {
    name: 'Fredo',
    type: 'кофейный напиток',
    image: coffePhotosArr['Fredo'],
    price: 249,
    popular: false,
    favorite: false,
    structure: {
      milk: 30,
      coffe: 25,
      time: 200,
      temperature: 70
    },
    description
  },
  {
    name: 'Glasse',
    type: 'кофейное мороженное',
    image: coffePhotosArr['Glasse'],
    price: 199,
    popular: true,
    favorite: false,
    structure: {
      milk: 45,
      coffe: 5,
      time: 140,
      temperature: 25
    },
    description
  },
];