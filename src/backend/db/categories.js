import { v4 as uuid } from 'uuid';
import ShoeImg from '../../assets/product-img.webp';

export const categories = [
  {
    _id: uuid(),
    categoryName: 'shoes',
    categoryImg: ShoeImg,
    description: 'Explore a wide range of shoes here.'
  },
  {
    _id: uuid(),
    categoryName: 'partywear',
    categoryImg: ShoeImg,
    description: 'Explore a wide range of party wear here.'
  },
  {
    _id: uuid(),
    categoryName: 'formals',
    categoryImg: ShoeImg,
    description: 'Explore a wide range of Formals here.'
  },
  {
    _id: uuid(),
    categoryName: 'casuals',
    categoryImg: ShoeImg,
    description: 'Explore a wide range of Casuals here.'
  }
];
