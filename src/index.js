//Sqrt of Number in js
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(25 ** (1 / 3));

//finding the max
console.log(Math.max(11, 12, 14, 15));
console.log(Math.max(11, 12, 14, "16"));
console.log(Math.max(11, 12, 14, "16px"));
//finding the min
console.log(Math.min(11, 1, 3, 1, 45, 19));
console.log(Math.PI * Number.parseFloat("10px") ** 2);
console.log(Math.trunc(Math.random() * 6));

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(12, 19));
//Rounding Integers
console.log(Math.trunc(23.3));
console.log(Math.round(23.9));
console.log(Math.ceil(23.5));
console.log(Math.ceil(22.7));

console.log(Math.floor(24.6));
console.log(Math.floor(25.8));
console.log(Math.floor("24.5"));
console.log(Math.floor(-26.6));
console.log(Math.trunc(-26.6));

/// Rounding Decimals
console.log((2.7).toFixed(0));

console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
