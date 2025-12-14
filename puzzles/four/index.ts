import puzzleInput from "./data/sample-data.txt";

const puzzleInputArray = puzzleInput.split(/\r?\n/).slice(0, -1);

let totalAmountArray = [];

for (const [index, value] of puzzleInputArray.entries()) {
  const amountWithfewerThanFourAdjacentRolls = handleRows(
    value,
    puzzleInputArray[index - 1],
    puzzleInputArray[index + 1],
  );
  totalAmountArray.push(amountWithfewerThanFourAdjacentRolls);
}

const totalAmount = totalAmountArray.reduce((a, c) => a + c);

console.log("Total Amount:", totalAmount);

function handleRows(
  currentRow: string,
  previousRow?: string,
  nextRow?: string,
) {
  const previousRowArray = previousRow?.split("");
  const currentRowArray = currentRow?.split("");
  const nextRowArray = nextRow?.split("");

  const positionArray = Array.from([1, 2, 3, 4, 5, 6, 7, 8]);

  let fewerThanFourCounter = 0;

  for (const [index, value] of currentRowArray.entries()) {
    let fewerThanFourAdjacentRolls = false;

    if (value === "@") {
      let adjacentRolls = 0;

      for (const position of positionArray) {
        if (position === 1 && previousRowArray?.[index - 1] === "@")
          adjacentRolls++;
        else if (position === 2 && previousRowArray?.[index] === "@")
          adjacentRolls++;
        else if (position === 3 && previousRowArray?.[index + 1] === "@")
          adjacentRolls++;
        else if (position === 4 && currentRowArray?.[index - 1] === "@")
          adjacentRolls++;
        else if (position === 5 && currentRowArray?.[index + 1] === "@")
          adjacentRolls++;
        else if (position === 6 && nextRowArray?.[index - 1] === "@")
          adjacentRolls++;
        else if (position === 7 && nextRowArray?.[index] === "@")
          adjacentRolls++;
        else if (position === 8 && nextRowArray?.[index + 1] === "@")
          adjacentRolls++;
      }
      if (adjacentRolls < 4) fewerThanFourAdjacentRolls = true;
    }
    if (fewerThanFourAdjacentRolls) fewerThanFourCounter++;
  }

  return fewerThanFourCounter;
}
