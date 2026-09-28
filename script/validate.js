export function validate(inputNumber) {
  const numberInput = Number(inputNumber);

  if (inputNumber == "") {
    return false;
  } else if (isNaN(numberInput) || !Number.isInteger(numberInput)) {
    return false;
  }

  return true;
}
