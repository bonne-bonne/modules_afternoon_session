## Context

Students have just completed a lesson on Node.js modules using ESM (`import`/`export`). They built a simple `sum` function and imported it into `index.js`. This recap session reinforces that pattern with a more realistic scenario — a utility file used in a backend — while staying simple enough for beginners.

---

## Theme: Order/Cart Processing

An e-commerce cart is a great teaching vehicle because:

- Everyone understands what it does
- Multiple utility functions arise naturally (format names, filter items, apply discount)
- Data is just arrays of simple objects — no complex structures
- It mirrors real backend utility/helper file patterns

---

## File Structure

```markdown
modules_recap/
├── package.json          # "type": "module" to enable ESM
├── utils.js              # utility functions (the module)
└── index.js              # main file — imports utils, runs them on dummy data`
```

---

## File Contents

### `package.json`

json

```json
{
  "type": "module"
}
```

### `utils.js` — three named exports

js

```javascript
export function formatFullName(user) {
  const first = user.firstName[0].toUpperCase() + user.firstName.slice(1).toLowerCase();
  const last  = user.lastName[0].toUpperCase()  + user.lastName.slice(1).toLowerCase();
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
```

**Note on `applyDiscount`:** The hint comment shows the maths conceptually without giving code. This sets up the pattern students need to write the exercise version themselves.

### `index.js` — dummy data + importing and calling utils

js

```javascript
import { formatFullName, getItemsUnderPrice, applyDiscount } from './utils.js';

const user = {
  firstName: 'sarah',
  lastName:  'johnson',
};

const cartItems = [
  { name: 'Keyboard', price: 49.99, quantity: 1 },
  { name: 'Mouse',    price: 24.99, quantity: 2 },
  { name: 'Monitor',  price: 199.99, quantity: 1 },
  { name: 'USB Hub',  price: 34.99, quantity: 1 },
];

const discountPercent = 10;

// --- Use the utility functions ---
const fullName       = formatFullName(user);
const affordableItems = getItemsUnderPrice(cartItems, 100);
const salePrice      = applyDiscount(cartItems[0].price, discountPercent);

console.log(`Customer: ${fullName}`);
console.log(`Items under $100:`, affordableItems);
console.log(`Keyboard after ${discountPercent}% discount: $${salePrice.toFixed(2)}`);
```

---

## Session Timing (60 min)

| Block | Duration | Activity |
| --- | --- | --- |
| Recap | 5 min | Quick Q&A: what are modules, why use them, how did ESM import/export work in the last lesson |
| Walkthrough | 15 min | Introduce the scenario. Show the finished files. Talk through `utils.js` function by function. Explain named exports. Show `index.js` imports and dummy data. Run it live |
| Setup | 10 min | Students create the files themselves and run `node index.js` |
| Exercise 1 | 10 min | Guided exercise — write `formatPrice(price)` |
| Exercise 2 (stretch) | 10 min | Stretch — write `applyDiscount` themselves from scratch using a stub with the hint comment |
| Review & Q&A | 10 min | Go through solutions together, answer questions |

---

## Exercises Detail

### Exercise 1 — `formatPrice(price)`

Add to `utils.js` and export:

js

`// Should return a string like "$49.99"
export function formatPrice(price) {
  // your code here
}`

Then import and use it in `index.js` to print each cart item:

```markdown
Keyboard — $49.99
Mouse — $24.99
Monitor — $199.99
USB Hub — $34.99
```

- Forces students through the full export/import cycle again
- Uses `.toFixed(2)` which they've already seen in `index.js`

---

### Exercise 2 (stretch) — Write `applyDiscount` from scratch

Remove the provided `applyDiscount` from `utils.js` and replace with this stub:

js

```javascript
export function applyDiscount(price, discountPercent) {
  // e.g. 20% off $100 can be calculated like this:
  //   20% of 100 = 20  (the discount amount)
  //   100 - 20 = 80    (the final price)

  // your code here
}
```

Students work out the formula from the comment. Good for students who finish early.

---

## Teaching Notes

- Emphasise **why** we separate utils into their own file: reusability, organisation, easier testing
- For `formatFullName`, walk through `.slice(1)` — beginners may not have seen it
- For `getItemsUnderPrice`, introduce `Array.filter()` — explain that it takes a callback that returns `true` or `false`, and only keeps the items where the condition is met; contrast with the `for...of` loop pattern from the last lesson to show how array methods can simplify iteration
- For `applyDiscount`, read the hint comment aloud and work through the maths together before showing the code
- Remind students that `.js` extension is **required** in ESM imports: `'./utils.js'` not `'./utils'`
- Add an extra item with a price just above and just below $100 so the filter output is clearly interesting (already done — USB Hub $34.99, Monitor $199.99)

---

## Files to Create

- `/modules_recap/package.json`
- `/modules_recap/utils.js`
- `/modules_recap/index.js`