import { ICoffeShop } from "../../../types/data/ICoffeShop";
import { randomMath } from "../../others/randomMath";
import { addresArr } from "./arrs/addresArr";
import { coffeNamesArrFirst, coffeNamesArrSecond } from "./arrs/coffeNamesArr";
import { imagesArr, previewsArr } from "./arrs/imagesArrs";
import { shopAssortGenerator } from "./shopAssortGenerator";

export function coffeShopsDataGenerator(): ICoffeShop[] {
  const arr: ICoffeShop[] = [];

  for (let i = 1; i <= randomMath(6, 9); i++) {
    arr.push({
      coffePreviewImage: previewsArr[Math.abs(i-5)],
      coffeOutsideImage: imagesArr[Math.abs(i-5)],
      name: `${coffeNamesArrFirst[randomMath(0, coffeNamesArrFirst.length - 1)]} ${coffeNamesArrSecond[randomMath(0, coffeNamesArrSecond.length - 1)]}`,
      address: addresArr[randomMath(0, addresArr.length - 1)],
      id: i,
      assortment: shopAssortGenerator()
    });
  }

  return arr;
}