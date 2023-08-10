export const BRANDCOLOR = '#916649';
export const FONTS = {
  A: {fontFamily: 'Bahiana-Regular'},
  B: {fontFamily: 'Aladin-Regular'},
  C: {fontFamily: 'Barriecito-Regular'},
  D: {fontFamily: 'Carattere-Regular'},
};
export const categories = [
  {
    id: 1,
    title: 'Cappuccino',
  },
  {
    id: 2,
    title: 'Latte',
  },
  {
    id: 3,
    title: 'Espresso',
  },
  {
    id: 4,
    title: 'Mocha',
  },
  {
    id: 5,
    title: 'Americano',
  },
];

export const size = [
  {
    id: 1,
    title: 'Small',
  },
  {
    id: 2,
    title: 'Medium',
  },
  {
    id: 3,
    title: 'Large',
  },
];

export const coffeeItems = [
  {
    id: 1,
    name: 'Cappuccino',
    price: '15.50',
    volume: '110 ml',
    stars: '4.3',
    image: require('../assets/images/2.png'),
    desc: 'Cappuccino is an espresso-based coffee drink originating in Italy, made with equal parts espresso, steamed milk, and milk foam, creating a frothy and delicious beverage.',
  },

  {
    id: 2,
    name: 'Espresso',
    price: '30.00',
    volume: '100 ml',
    stars: '4.0',
    image: require('../assets/images/3.png'),
    desc: 'Espresso is a concentrated coffee beverage made by forcing hot water through finely-ground coffee beans. It forms the base for various popular coffee drinks.',
  },

  {
    id: 3,
    name: 'Black Coffee',
    price: '25.50',
    volume: '116 ml',
    stars: '4.6',
    image: require('../assets/images/1.png'),
    desc: 'Black coffee is a pure form of coffee without any additives like milk or sugar, enjoyed for its bold and bitter taste.',
  },

  {
    id: 4,
    name: 'Latte',
    price: '10.30',
    volume: '80 ml',
    stars: '3.5',
    image: require('../assets/images/4.png'),
    desc: 'Latte is a popular espresso-based coffee drink, originating from Italy, made with espresso, steamed milk, and a small layer of milk foam on top.',
  },

  {
    id: 5,
    name: 'Mocha',
    price: '23.10',
    volume: '120 ml',
    stars: '4.7',
    image: require('../assets/images/5.png'),
    desc: 'Mocha is a popular coffee beverage combining espresso, steamed milk, and chocolate syrup or cocoa powder, resulting in a rich and deliciously flavored drink.',
  },
];
