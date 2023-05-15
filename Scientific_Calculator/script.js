/* Creating function in HTML for backspace operation */
function backspace(calc) {
  size = calc.display.value.length;
  calc.display.value = calc.display.value.substring(0, size - 1);
}

/* Creating function to calculate factorial of element */
function calculate(calc) {
  /* Check if function include ! character then
	calculate factorial of number */
  if (calc.display.value.includes("!")) {
    size = calc.display.value.length;
    n = Number(calc.display.value.substring(0, size - 1));
    f = 1;

    for (i = 2; i <= n; i++) f = f * i;
    calc.display.value = f;
  } else if (calc.display.value.includes("%")) {

  /* If function include % character then calculate
	the % of number */
    size = calc.display.value.length;
    n = Number(calc.display.value.substring(0, size - 1));
    calc.display.value =eval(calc.display.value);
  } else
  /* Otherwise evaluate and execute output */
    calc.display.value = eval(calc.display.value);
}
