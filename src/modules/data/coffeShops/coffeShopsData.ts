import { ICoffeShop } from '../../../types/data/ICoffeShop';
import { randomMath } from '../../others/randomMath';
import { coffeShopsDataGenerator } from './coffeShopsDataGenerator';

export const coffeShopsData: ICoffeShop[] = coffeShopsDataGenerator(randomMath(6, 10));