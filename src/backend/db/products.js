import { v4 as uuid } from 'uuid';
import Img1 from '../../assets/product-img.webp';

export const products = [
  {
    _id: uuid(),
    brand: 'Nike',
    name: 'Men premium trendy Jacket',
    originalPrice: '2000',
    discountedPrice: '1500',
    src: { url: Img1, alt: "Men's jacket" },
    category: 'men',
    cod: true,
    fastDelivery: true,
    rating: 1,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Sobo',
    name: 'Men premium sports TShirt',
    originalPrice: '1500',
    discountedPrice: '1000',
    src: { url: Img1, alt: "Men's Tshirt" },
    category: 'men',
    cod: true,
    fastDelivery: true,
    rating: 5,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Nike',
    name: 'Men winter cool shoes',
    originalPrice: '3000',
    discountedPrice: '2500',
    src: { url: Img1, alt: 'sports shoes' },
    category: 'men',
    cod: true,
    fastDelivery: false,
    rating: 3,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Nike',
    name: 'Women premium Tshirt',
    originalPrice: '3000',
    discountedPrice: '2800',
    src: { url: Img1, alt: 'Silk saree' },
    category: 'women',
    cod: true,
    fastDelivery: false,
    rating: 4,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Roadster',
    name: 'Men stylish casual shoes',
    originalPrice: '1000',
    discountedPrice: '700',
    src: { url: Img1, alt: 'Casual shoes' },
    category: 'men',
    cod: true,
    fastDelivery: false,
    rating: 5,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Nike',
    name: 'Women premium stylish shoes',
    originalPrice: '2000',
    discountedPrice: '1500',
    src: { url: Img1, alt: 'Formal shoes' },
    category: 'women',
    cod: true,
    fastDelivery: false,
    rating: 4,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Superdry',
    name: 'Men formal quality Jacket',
    originalPrice: '4000',
    discountedPrice: '3500',
    src: { url: Img1, alt: 'Formal jacket' },
    category: 'men',
    cod: false,
    fastDelivery: true,
    rating: 2,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Nike',
    name: 'Men sports durable shoes',
    originalPrice: '1000',
    discountedPrice: '500',
    src: { url: Img1, alt: 'Climbing shoes' },
    category: 'men',
    cod: false,
    fastDelivery: true,
    rating: 3,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Fashion',
    name: 'Women premium party shoes',
    originalPrice: '1000',
    discountedPrice: '500',
    src: { url: Img1, alt: 'Women party shoes' },
    category: 'women',
    cod: true,
    fastDelivery: true,
    rating: 4,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Bewakoof',
    name: 'Men formal premium pants',
    originalPrice: '3000',
    discountedPrice: '2500',
    src: { url: Img1, alt: 'Formal pants' },
    category: 'men',
    cod: false,
    fastDelivery: false,
    rating: 5,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Nike',
    name: ' women casual party Jacket',
    originalPrice: '3000',
    discountedPrice: '2000',
    src: { url: Img1, alt: 'Women jacket' },
    category: 'women',
    cod: false,
    rating: 2,
    fastDelivery: true,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Sobo',
    name: 'Men round neck Tshirt',
    originalPrice: '700',
    discountedPrice: '500',
    src: { url: Img1, alt: 'Round Tshirt' },
    category: 'women',
    cod: false,
    fastDelivery: false,
    rating: 1,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Roadster',
    name: 'Men stylish casual shoes',
    originalPrice: '1000',
    discountedPrice: '700',
    src: { url: Img1, alt: 'Casual shoes' },
    category: 'men',
    cod: true,
    fastDelivery: false,
    rating: 5,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Nike',
    name: 'Women premium stylish shoes',
    originalPrice: '2000',
    discountedPrice: '1500',
    src: { url: Img1, alt: 'Formal shoes' },
    category: 'women',
    cod: true,
    fastDelivery: false,
    rating: 4,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Superdry',
    name: 'Men formal quality Jacket',
    originalPrice: '4000',
    discountedPrice: '3500',
    src: { url: Img1, alt: 'Formal jacket' },
    category: 'men',
    cod: false,
    fastDelivery: true,
    rating: 2,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Nike',
    name: 'Men sports durable shoes',
    originalPrice: '1000',
    discountedPrice: '500',
    src: { url: Img1, alt: 'Climbing shoes' },
    category: 'men',
    cod: false,
    fastDelivery: true,
    rating: 3,
    quantity: 1
  }
];
