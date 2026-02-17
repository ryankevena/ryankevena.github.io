let results = [];
let total = 0;
let min = null;
let max = null;

document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {

  let x = prompt("Enter first number:");
  if (x === null) break;

  let y = prompt("Enter second number:");
  if (y === null) break;

  let operator = prompt("Enter operator (+, -, *, /, %):");
  if (operator === null) break;

  let result;
  let num1 = Number(x);
  let num2 = Number(y);

  if (isNaN(num1) || isNaN(num2)) {
    result = "Error: Invalid Number";
  } else if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num2 !== 0 ? num1 / num2 : "Error: Divide by 0";
  } else if (operator === "%") {
    result = num1 % num2;
  } else {
    result = "Error: Invalid Operator";
  }

  // Add valid results to summary
  if (typeof result === "number") {
    results.push(result);
    total += result;

    if (min === null || result < min) {
      min = result;
    }

    if (max === null || result > max) {
      max = result;
    }
  }

  document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
}

document.write("</table>");

// Summary Table
if (results.length > 0) {
  let avg = total / results.length;

  document.write("<h3>Summary</h3>");
  document.write("<table>");
  document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
  document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
  document.write("</table>");
} else {
  document.write("<p>No valid calculations were entered.</p>");
}
