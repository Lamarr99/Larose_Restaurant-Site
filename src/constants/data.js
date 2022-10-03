import images from './images';

const wines = [
  {
    title: 'Carlo Rossi',
    price: '$10',
    tags: 'CA | Bottle',
  },
  {
    title: 'Cabernet Sauvignon',
    price: '$60',
    tags: 'FR | Bottle',
  },
  {
    title: 'Merlot & Pinot Noir',
    price: '$30',
    tags: 'FR | Bottle',
  },
  {
    title: 'Zinfandel',
    price: '$45',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Guinness Extra Stout',
    price: '$5',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Negroni',
    price: '$15',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Lime juice | Sugar',
  },
  {
    title: "Manhattan",
    price: '$15',
    tags: 'Spicy rye | Sweet Vermouth | Angostura Bitters | Cherry Garnish',
  }, 
  {
    title: 'Old Fashioned',
    price: '$15',
    tags: 'Bourbon | Brown sugar | Angostura Bitters | Orange twist',
  },
  {
    title: 'Aperol Sprtiz',
    price: '$15',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
 

 
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'James Beard Foundation Award',
    subtitle: 'America’s Classics Awards.',
  },
  {
    imgUrl: images.award01,
    title: 'Star chefs',
    subtitle: 'Rising star (2019).',
  },
  {
    imgUrl: images.award05,
    title: 'NYSRA Awards',
    subtitle: 'Best Solo Dining',
  },
  {
    imgUrl: images.award03,
    title: 'The Torch Award',
    subtitle: 'outstanding wine program award.',
  },
];

export default { wines, cocktails, awards };
