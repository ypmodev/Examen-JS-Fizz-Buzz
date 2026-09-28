const inputNumber = document.querySelector("#inputNumber");
const message = document.querySelector("#message");
const recordHistory = document.querySelector("#recordHistory");

const history = [];
const result = ["FizzBuzz", "Fizz", "Buzz", "No es divisible"];

//DOM
function getInputNumber(inputNumber) {
  return inputNumber.value.trim();
}

function showMessage(text) {
  message.textContent = text;
}

function clearInputNumber(inputNumber) {
  inputNumber.value = "";
}

function renderHistory(history) {
  recordHistory.innerHTML = "";

  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.number}: ${item.result}`;
    recordHistory.appendChild(li);
  });
}

//validate
function validate(inputNumber) {
  const numberInput = Number(inputNumber);

  if (inputNumber == "") {
    return false;
  } else if (isNaN(numberInput) || !Number.isInteger(numberInput)) {
    return false;
  }

  return true;
}

//JS

function divisible(numero, divider) {
  if (numero % divider === 0) {
    return true;
  } else {
    return false;
  }
}

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
