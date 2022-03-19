function sumUntil(maxValue) {
  let result;
  if (typeof maxValue === "number") {
    result = (maxValue * (maxValue + 1)) / 2;
  } else {
    result = "This value is NOT a number!";
  }
  return result;
}

console.log(sumUntil(5));
