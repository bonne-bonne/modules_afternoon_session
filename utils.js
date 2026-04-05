export function formatFullName(user) {
  const first = user.firstName[0].toUpperCase() + user.firstName.slice(1).toLowerCase();
  const last = user.lastName[0].toUpperCase() + user.lastName.slice(1).toLowerCase();
  return `${first} ${last}`;
}

export function getItemsUnderPrice(items, limit) {
  return items.filter(item => item.price < limit);
}

export function applyDiscount(price, discountPercent) {
  // Formula:
  // e.g. 10% off $49.99: 49.99 - (49.99 * (10 / 100)) = 49.99 - 4.999 = 44.99
  return price - (price * (discountPercent / 100));
}
