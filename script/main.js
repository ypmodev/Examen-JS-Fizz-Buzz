import { divisible } from "/script/check-divisible.js";
import { validate } from "/script/validate.js";
import {
  getInputNumber,
  showMessage,
  clearInputNumber,
  renderHistory,
} from "/script/ui.js";

const form = document.querySelector("#form");
const inputNumber = document.querySelector("#inputNumber");

const history = [];
const result = ["FizzBuzz", "Fizz", "Buzz", "No es divisible"];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showMessage("");

  const numberOriginal = getInputNumber(inputNumber);

  if (!validate(numberOriginal)) {
    showMessage("Debe introducir un número entero y sin decimales");
    return;
  }

  const numberActual = Number(numberOriginal);

  if (divisible(numberActual, 3) && divisible(numberActual, 5)) {
    showMessage(result[0]);
    history.push({ number: numberActual, result: result[0] });
  } else if (divisible(numberActual, 3)) {
    history.push({ number: numberActual, result: result[1] });
    showMessage(result[1]);
  } else if (divisible(numberActual, 5)) {
    showMessage(result[2]);
    history.push({ number: numberActual, result: result[2] });
  } else {
    showMessage(numberActual);
    history.push({ number: numberActual, result: result[3] });
  }
  clearInputNumber(inputNumber);
  renderHistory(history);
});
