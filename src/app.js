import { add, subtract, multiply } from "../src/math.js";

document.getElementById("addBtn").addEventListener("click", () => doMath(add));
document
  .getElementById("subBtn")
  .addEventListener("click", () => doMath(subtract));

document
  .getElementById("mulBtn")
  .addEventListener("click", () => doMath(multiply));

function doMath(method) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = method(num1, num2);
  document.getElementById("resultSpan").textContent = result;
}
