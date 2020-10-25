import { IButtons } from '../../types/data/IButtons';

export const buttonsArr: IButtons[] = [
  {
    title: 'Войти черезе Facebook',
    backgroundColor: '#3B5998',
    textColor: 'white',
    image: require('../../../images/icon_facebook.png'),
    imageWidth: 13,
    imageHeight: 26
  },
  {
    title: 'Войти черезе Google',
    backgroundColor: 'white',
    image: require('../../../images/icon_google.png'),
    textColor: 'black',
    imageWidth: 22,
    imageHeight: 23
  },
  {
    title: 'Войти черезе CoffeTime',
    backgroundColor: '#B3C39C',
    image: null,
    textColor: 'white'
  }
];