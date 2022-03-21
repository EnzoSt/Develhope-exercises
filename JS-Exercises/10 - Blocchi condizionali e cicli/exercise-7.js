function sumUntil(maxValue) {
  let result = 0;
  for (let i = 1; i <= maxValue; i++) {
    result += i;
  }
  return result;
}

console.log(sumUntil(5));
