function filterNumbersGreaterThanFive(numbers) {
  if (!Array.isArray(numbers)) {
    return "Input is not an array.";
  } else if (numbers.every((item) => typeof item === "number")) {
    return "Array item is not a number.";
  }
  return numbers.filter((number) => number > 5);
}

const numbers = [2, 8, 4, 10, 1, 7];

// console.log(filterNumbersGreaterThanFive(numbers));
