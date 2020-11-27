import { ICoffeShop } from '../../types/data/ICoffeShop';
import { randomMath } from '../others/randomMath';
import { CoffeNamesArrFirst, CoffeNamesArrSecond } from './CoffeNamesArr';

export const CoffeShopsDataList: ICoffeShop[] = [
  {
    image: require(`../../../images/CoffePrevies/previe1.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: ''
  },
  {
    image: require(`../../../images/CoffePrevies/previe2.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: ''
  },
  {
    image: require(`../../../images/CoffePrevies/previe3.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: ''
  },
  {
    image: require(`../../../images/CoffePrevies/previe4.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: ''
  },
  {
    image: require(`../../../images/CoffePrevies/previe5.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: ''
  },
  {
    image: require(`../../../images/CoffePrevies/previe1.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: ''
  },
  {
    image: require(`../../../images/CoffePrevies/previe2.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: ''
  },
  {
    image: require(`../../../images/CoffePrevies/previe3.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: ''
  },
  {
    image: require(`../../../images/CoffePrevies/previe4.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: ''
  },
  {
    image: require(`../../../images/CoffePrevies/previe5.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: ''
  }
]