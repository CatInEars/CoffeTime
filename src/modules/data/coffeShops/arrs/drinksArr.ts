import { IDrink } from '../../../../types/data/IDrink';

export const drinksArr: IDrink[] = [
  {
    name: 'Cappuchino',
    type: 'кофейный напиток',
    price: 120,
    popular: true,
    favorite: false,
    structure: {
      milk: 15,
      coffe: 25,
      time: 156,
      temperature: 95
    }
  },
  {
    name: 'Latte macchiato',
    type: 'кофейный напиток',
    price: 149,
    popular: true,
    favorite: false,
    structure: {
      milk: 20,
      coffe: 25,
      time: 180,
      temperature: 90
    }
  },
  {
    name: 'Americano',
    type: 'кофейный напиток',
    price: 99,
    popular: false,
    favorite: false,
    structure: {
      coffe: 35,
      time: 140,
      temperature: 90
    }
  }
];