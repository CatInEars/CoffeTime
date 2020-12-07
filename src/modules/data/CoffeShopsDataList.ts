import { ICoffeShop } from '../../types/data/ICoffeShop';
import { randomMath } from '../others/randomMath';
import { CoffeNamesArrFirst, CoffeNamesArrSecond } from './CoffeNamesArr';

export const CoffeShopsDataList: ICoffeShop[] = [
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe1.jpg`),
    coffeOutsideImage: require('../../../images/CoffeOutside/image1.jpg'),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: '',
    id: 1
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe2.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image2.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: '',
    id: 2
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe3.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image3.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: '',
    id: 3
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe4.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image4.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: '',
    id: 4
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe5.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image5.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: '',
    id: 5
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe1.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image1.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: '',
    id: 6
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe2.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image2.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: '',
    id: 7
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe3.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image3.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: '',
    id: 8
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe4.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image4.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: '',
    id: 9
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe5.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image5.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: '',
    id: 10
  }
];