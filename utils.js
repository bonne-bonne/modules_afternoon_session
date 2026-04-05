export function formatFullName(user) {
  const first = user.firstName[0].toUpperCase() + user.firstName.slice(1).toLowerCase();
  const last = user.lastName[0].toUpperCase() + user.lastName.slice(1).toLowerCase();
  return `${first} ${last}`;
}

export function getItemsUnderPrice(items, limit) {
  const result = [];
  for (const item of items) {
    if (item.price < limit) {
      result.push(item);
    }
  }
  return result;
}

export function applyDiscount(price, discountPercent) {
  // e.g. 20% off $100 can be calculated like this:
  //   20% of 100 = 20  (the discount amount)
  //   100 - 20 = 80    (the final price)
  return price - (price * (discountPercent / 100));
}
