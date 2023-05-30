import { v4 as uuid } from 'uuid';
import ShoeImg from '../../assets/product-img.webp';
import PartyImg from '../../assets/ecom-img14.webp';
import FormalImg from '../../assets/ecom-img15.webp';
import CasualImg from '../../assets/ecom-img10.webp';

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
    categoryImg: PartyImg,
    description: 'Explore a wide range of party wear here.'
  },
  {
    _id: uuid(),
    categoryName: 'formals',
    categoryImg: FormalImg,
    description: 'Explore a wide range of Formals here.'
  },
  {
    _id: uuid(),
    categoryName: 'casuals',
    categoryImg: CasualImg,
    description: 'Explore a wide range of Casuals here.'
  }
];
