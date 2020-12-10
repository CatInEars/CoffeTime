import { ICoffeShop } from '../../types/data/ICoffeShop';
import { randomMath } from '../others/randomMath';
import { CoffeNamesArrFirst, CoffeNamesArrSecond } from './CoffeNamesArr';

export const CoffeShopsDataList: ICoffeShop[] = [
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe1.jpg`),
    coffeOutsideImage: require('../../../images/CoffeOutside/image1.jpg'),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: 'ул. Макарова д.5',
    id: 1
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe2.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image2.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: 'ул. Юности д.120',
    id: 2
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe3.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image3.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: 'ул. Макарова д.5',
    id: 3
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe4.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image4.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: 'ул. Макарова д.5',
    id: 4
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe5.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image5.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: 'ул. Юности д.120',
    id: 5
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe1.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image1.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: 'ул. Макарова д.5',
    id: 6
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe2.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image2.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: 'ул. Макарова д.5',
    id: 7
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe3.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image3.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: 'ул. Макарова д.5',
    id: 8
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe4.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image4.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: 'ул. Юности д.120',
    id: 9
  },
  {
    coffePreviewImage: require(`../../../images/CoffePrevies/previe5.jpg`),
    coffeOutsideImage: require(`../../../images/CoffeOutside/image5.jpg`),
    name: `${CoffeNamesArrFirst[randomMath(0, CoffeNamesArrFirst.length - 1)]} ${CoffeNamesArrSecond[randomMath(0, CoffeNamesArrSecond.length - 1)]}`,
    address: 'ул. Макарова д.5',
    id: 10
  }
];