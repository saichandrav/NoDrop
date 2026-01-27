import bisleri from '../assets/image.avif';
import tata from '../assets/tatawater.jpg';
import aquamine from '../assets/aquamine.jpeg';
import bisleri20l from '../assets/Bisleri20.jpeg';
import bisleri10l from '../assets/Bisleri10.jpg';
import bisleri5l from '../assets/Bisleri5.avif';

export const brands = [
  { name: 'All', id: 'all' },
  { name: 'Bisleri', id: 'bisleri', image: bisleri },
  { name: 'Tata Water', id: 'tata', image: tata },
  { name: 'Aquamine', id: 'aquamine', image: aquamine },
];

export const products = [
  // Bisleri Products
  {
    id: 1,
    name: 'Bisleri Pure Water 20L',
    brand: 'bisleri',
    price: 50,
    image: bisleri20l,
    description: 'Pure, clean, and mineral-balanced water delivered fresh to your doorstep.',
  },
  {
    id: 2,
    name: 'Bisleri Pure Water 10L',
    brand: 'bisleri',
    price: 30,
    image: bisleri10l,
    description: 'Perfect for small families, same purity in every drop.',
  },
  {
    id: 3,
    name: 'Bisleri Pure Water 5L',
    brand: 'bisleri',
    price: 15,
    image: bisleri5l,
    description: 'Compact size for offices and small households.',
  },

  // Tata Water Products
  {
    id: 4,
    name: 'Tata Water 20L Can',
    brand: 'tata',
    price: 45,
    image: tata,
    description: 'Compact size for small families or offices. Same purity in every drop.',
  },
  {
    id: 5,
    name: 'Tata Water 10L Bottle',
    brand: 'tata',
    price: 25,
    image: tata,
    description: 'Premium water purification for your family.',
  },
  {
    id: 6,
    name: 'Tata Water 5L Bottle',
    brand: 'tata',
    price: 12,
    image: tata,
    description: 'Individual bottles for on-the-go hydration.',
  },

  // Aquamine Products
  {
    id: 7,
    name: 'Aquamine Cooler Water 20L',
    brand: 'aquamine',
    price: 55,
    image: aquamine,
    description: 'Hot and cold water dispenser – perfect for home or workplace convenience.',
  },
  {
    id: 8,
    name: 'Aquamine Pure Water 10L',
    brand: 'aquamine',
    price: 35,
    image: aquamine,
    description: 'Premium purified water with mineral balance.',
  },
  {
    id: 9,
    name: 'Aquamine Pure Water 5L',
    brand: 'aquamine',
    price: 20,
    image: aquamine,
    description: 'Portable aqua bottles for travel and office.',
  },
];

export const getProductsByBrand = (brandId) => {
  if (brandId === 'all') return products;
  return products.filter((product) => product.brand === brandId);
};
