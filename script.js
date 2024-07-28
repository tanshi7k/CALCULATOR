let screen = document.getElementById('screen');
let input = '';
let operation = '';

function append(value) 
{
	input += value;
	screen.value = input;
}

function operate(operator) 
{
	input += operator;
	operation = operator;
	screen.value = input;
}

function calculate() 
{
	let result = eval(input);
	screen.value = result;
	input = result;
}

function clearScreen() 
{
	input = '';
	screen.value = '';
}
