import { IButtons } from '../../types/data/IButtons';
import { activeButtonColor, normalButtonColor } from '../../common/colors';

export const buttonsArr: IButtons[] = [
  {
    title: 'Войти через Facebook',
    backgroundColor: '#3B5998',
    textColor: 'white',
    image: require('../../../images/icon_facebook.png'),
    imageWidth: 13,
    imageHeight: 26,
    onPressBackgroundColor: '#2B416E',
    activateLogin: false
  },
  {
    title: 'Войти через Google',
    backgroundColor: 'white',
    image: require('../../../images/icon_google.png'),
    textColor: 'black',
    imageWidth: 22,
    imageHeight: 23,
    onPressBackgroundColor: '#E2E2E2',
    activateLogin: false
  },
  {
    title: 'Войти через CoffeTime',
    backgroundColor: normalButtonColor,
    image: null,
    textColor: 'white',
    onPressBackgroundColor: activeButtonColor,
    activateLogin: true
  }
];
