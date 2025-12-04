import puzzleInput from "./test-data/sample.txt";

function modulo(n: number, d: number) {
  return ((n % d) + d) % d;
}

function getNextPosition(currentNum: number, sequence: string) {
  const direction = sequence.substring(0, 1);
  const distance = Number(sequence.substring(1));

  const difference =
    direction === "L" ? currentNum - distance : currentNum + distance;

  currentNumber = modulo(difference, 100);

  if (currentNumber === 0) {
    zeroCount++;
  }
}

const puzzleInputArray = puzzleInput.split(/\r?\n/).slice(0, -1);
const startNumber = 50;
let currentNumber: number = startNumber;
let zeroCount = 0;

for (const seq of puzzleInputArray) {
  getNextPosition(currentNumber, seq);
}

console.log("Final Number:", currentNumber);
console.log("Final Zero Count", zeroCount);
