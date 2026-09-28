const message = document.querySelector("#message");
const recordHistory = document.querySelector("#recordHistory");

export function getInputNumber(inputNumber) {
  return inputNumber.value.trim();
}

export function showMessage(text) {
  message.textContent = text;
}

export function clearInputNumber(inputNumber) {
  inputNumber.value = "";
}

export function renderHistory(history) {
  recordHistory.innerHTML = "";

  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.number}: ${item.result}`;
    recordHistory.appendChild(li);
  });
}
