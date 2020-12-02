function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}


function divide (num1, num2) {
  return num1 / num2

}

function operate(operator, num1, num2) {

    operator === "add" ? add(num1, num2) :
    operator === "subtract" ? subtract(num1, num2) :
    operator === "multiply" ? multiply(num1, num2) :
    divide(num1, num2)

}
//Grab main calculator elements

let display = document.querySelector("#display")
let numpad = document.querySelector("#numpad");
let functionKeys = document.querySelectorAll(".functionKey")
let numbers = document.querySelectorAll(".numberKey");
console.log(numbers)
console.log(numbers[0].id)
console.log(functionKeys)

//Individual numbers can still be targeted when all keys are grabbed using queryselectorAll



let displayValue = []


//Next step - create the display function