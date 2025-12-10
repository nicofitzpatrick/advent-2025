import { sampleInput } from "./sample-data";

function getRange(size: number, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

function handleId(id: number) {
  const idArray = [...id.toString()].map(Number);

  // Only even numbers can be a double number, so exclude if odd
  if (idArray.length % 2 !== 0) {
    return false;
  }

  // Split array into two groups
  let firstHalfArray: number[] = [];
  let secondHalfArray: number[] = [];

  for (const [i, value] of idArray.entries()) {
    if (i < idArray.length / 2) {
      firstHalfArray.push(value);
    } else {
      secondHalfArray.push(value);
    }
  }

  // Convert array groups back into single numbers
  const firstHalfNumber = Number(firstHalfArray.join(""));
  const secondHalfNumber = Number(secondHalfArray.join(""));

  const idContainsDoubleNumber = firstHalfNumber - secondHalfNumber === 0;

  if (idContainsDoubleNumber) {
    return id;
  }

  return false;
}

function handleRange(range: string) {
  const rangeArray = range.split("-");
  const lowerRange = Number(rangeArray[0]);
  const higherRange = Number(rangeArray[1]);

  const rangeLength = higherRange - lowerRange + 1;
  const numbersInRange = getRange(rangeLength, lowerRange);

  let numbersWithDoubles: number[] = [];

  for (const number of numbersInRange) {
    const numberWithDouble = handleId(number);

    if (numberWithDouble) {
      numbersWithDoubles.push(numberWithDouble);
    }
  }

  if (numbersWithDoubles.length > 0) {
    return numbersWithDoubles;
  }

  return false;
}

const input = sampleInput;

const inputArray = input.split(",");

let doubleNumbersArray = [];

for (const range of inputArray) {
  const doubleNumbers = handleRange(range);

  if (doubleNumbers) {
    doubleNumbersArray.push(doubleNumbers);
  }
}

const flatDoubleNumbersArray = doubleNumbersArray.flat();

const doubleNumbersArrayTotal = flatDoubleNumbersArray.reduce(
  (accumulator: number, currentValue: number) => accumulator + currentValue,
  0,
);

console.log("Total:", doubleNumbersArrayTotal);
