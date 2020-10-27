import { IButtons } from '../../types/data/IButtons';

export const buttonsArr: IButtons[] = [
  {
    title: 'Войти черезе Facebook',
    backgroundColor: '#3B5998',
    textColor: 'white',
    image: require('../../../images/icon_facebook.png'),
    imageWidth: 13,
    imageHeight: 26,
    onPressBackgroundColor: '#2B416E'
  },
  {
    title: 'Войти черезе Google',
    backgroundColor: 'white',
    image: require('../../../images/icon_google.png'),
    textColor: 'black',
    imageWidth: 22,
    imageHeight: 23,
    onPressBackgroundColor: '#E2E2E2'
  },
  {
    title: 'Войти черезе CoffeTime',
    backgroundColor: '#C8D9AF',
    image: null,
    textColor: 'white',
    onPressBackgroundColor: '#B3C39C'
  }
];