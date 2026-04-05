import { formatFullName, getItemsUnderPrice, applyDiscount } from './utils.js';

const user = {
  firstName: 'sarah',
  lastName: 'johnson',
};

const cartItems = [
  { name: 'Keyboard', price: 49.99, quantity: 1 },
  { name: 'Mouse', price: 24.99, quantity: 2 },
  { name: 'Monitor', price: 199.99, quantity: 1 },
  { name: 'USB Hub', price: 34.99, quantity: 1 },
];

const discountPercent = 10;

// --- Use the utility functions ---
const fullName = formatFullName(user);
const affordableItems = getItemsUnderPrice(cartItems, 100);
const salePrice = applyDiscount(cartItems[0].price, discountPercent);

console.log(`Customer: ${fullName}`);
console.log(`Items under $100:`, affordableItems);
console.log(`Keyboard after ${discountPercent}% discount: $${salePrice.toFixed(2)}`);
