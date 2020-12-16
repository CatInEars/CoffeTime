import { ICoffeShop } from "../../../types/data/ICoffeShop";
import { randomMath } from "../../others/randomMath";
import { addresArr } from "./arrs/addresArr";
import { coffeNamesArrFirst, coffeNamesArrSecond } from "./arrs/coffeNamesArr";
import { imagesArr, previewsArr } from "./arrs/imagesArrs";

export function coffeShopsDataGenerator(count: number): ICoffeShop[] {
  const arr = [];

  for (let i = 1; i <= count; i++) {
    arr.push({
      coffePreviewImage: previewsArr[Math.abs(i-5)],
      coffeOutsideImage: imagesArr[Math.abs(i-5)],
      name: `${coffeNamesArrFirst[randomMath(0, coffeNamesArrFirst.length - 1)]} ${coffeNamesArrSecond[randomMath(0, coffeNamesArrSecond.length - 1)]}`,
      address: addresArr[randomMath(0, addresArr.length - 1)],
      id: i
    });
  }

  return arr;
}