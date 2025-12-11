import puzzleInput from "./data/sample-data.txt";

const puzzleInputArray = puzzleInput.split(/\r?\n/).slice(0, -1);

let largestJolts = [];

for (const bank of puzzleInputArray) {
  const largestJolt = findLargestJolt(bank);
  largestJolts.push(largestJolt);
}

const totalJoltage = largestJolts.reduce((a, c) => a + c);

console.log("Total Joltage:", totalJoltage);

function findLargestJolt(bank: string) {
  const splitNumbers = [...bank.toString()].map(Number);

  const numbersExcludingFinal = splitNumbers.slice(0, splitNumbers.length - 1);
  let largestNumber: number = 0;
  let largestNumberIndexPosition = 0;

  for (const [index, num] of numbersExcludingFinal.entries()) {
    if (num > largestNumber) {
      largestNumber = num;
      largestNumberIndexPosition = index;
    }
  }

  const numbersAfterLargest = splitNumbers.slice(
    largestNumberIndexPosition + 1,
    splitNumbers.length,
  );
  let secondLargestNumber: number = 0;

  for (const num of numbersAfterLargest) {
    if (num > secondLargestNumber) {
      secondLargestNumber = num;
    }
  }

  const largestJolt: string = "" + largestNumber + secondLargestNumber;

  return Number(largestJolt);
}
