
//Grab main calculator elements

let display = document.querySelector("#display")
let numpad = document.querySelector("#numpad");
let functionPad = document.querySelector("#functions");
let functionKeys = document.querySelectorAll(".functionKey")
let numbers = document.querySelectorAll(".numberKey");



//Individual numbers can still be targeted when all keys are grabbed using queryselectorAll

//Add event listeners
numpad.addEventListener("click", displayScreen)
functionPad.addEventListener("click", operatorFunction)
functionPad.childNodes[11].addEventListener("click", clearFunction);
functionPad.childNodes[9].addEventListener("click", equalsFunction);
console.log(functionPad)



let displayValue = []
let memoryValue = []
let operator; 
let result = 0;

//Do I need the individual functions or can they just be part of the operate function e.g. return x*x, x+x...
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

 return num2 === 0 ? "Can't divide by zero." : num1 / num2

}

function operate(operator, num1, num2) {

    return operator === "add" ? add(num1, num2) :
    operator === "subtract" ? subtract(num1, num2) :
    operator === "multiply" ? multiply(num1, num2) :
    divide(num1, num2)

}


//Next step - create the display function

function displayScreen() {
  //Inactivate anything that's not a button. Ignore the numpad div
  if(event.target.id === "numpad") {
    return
  }
//This prevents multiple decimal places being added. 
if(event.target.classList.contains("decimal")){
  return
}
if(event.target.id === ".") {
  event.target.classList.add("decimal")
}
//Add the number to the display array
displayValue.push(event.target.id)
//Add the array value to the screen
display.textContent = displayValue.join("")
}


function operatorFunction() {
  //If there is no previous result, calculate as normal

  if(memoryValue.length === 0) {

    //Set the operator to the clicked button
    if(event.target.id === "add" || event.target.id === "subtract" ||event.target.id === "multiply" ||event.target.id === "divide") {
    operator = event.target.id;
    console.log(operator)

    //Give the clicked button clicked status

    functionKeys.forEach(item => {
      item.id == event.target.id ? item.classList.add("clicked") : item.classList.remove("clicked");
    })

    //Move the value on screen into memory

    memoryValue = [...displayValue];

    //Clear the display array but keep prev value on screen
    
    displayValue = [];


  }

}
//If there is a prev result...
/*
else {

  result = operate(operator, Number(memoryValue.join("")), Number(displayValue.join(""))) + ""

  console.log(result)
  display.textContent = result;
  displayValue = []
  console.log(displayValue, "displayed")
  
  memoryValue = [...result.split("")]
  console.log("memory:", memoryValue, "display", displayValue)
 
  
}*/


}

function equalsFunction(){
  //EQUALS
  //If the equals button is pressed, run the operate function
  if(event.target.id === "equals") {
    result = operate(operator, Number(memoryValue.join("")), Number(displayValue.join("")))
      
   console.log("The result is: " + result)
   display.textContent = result;
   //memoryValue = (result + "").split("")
   /*console.log("Display: " + displayValue)
   console.log("Memory: " + memoryValue)
   console.log("result : " + result)*/

   //clear the array so that when the user presses a key, the number isn't added to the previous number.
  displayValue = [];

  //Get rid of any highlighted buttons
  functionKeys.forEach(key => {
    if (key.classList.contains("clicked")){
      key.classList.remove("clicked")
    }
  })


   
  }
}



function clearFunction() {

  // Activating the clear button. Array needs to be emptied, too.
  if(event.target.id ==="clear") {
    displayValue = [];
    display.textContent = 0;
    memoryValue = [];
    result = 0;
    console.clear()
    if(numbers[10].classList.contains("decimal")){
      numbers[10].classList.remove("decimal")
    }

    functionKeys.forEach(key => {
      if (key.classList.contains("clicked")){
        key.classList.remove("clicked")
      }
    })
      }
      
}

//Bug found - pressing a button then clicking two operators produces an incorrect result. Caused by clear function in runOperator?

/* Enter first number
Press operator key [first number stored in memory]
enter second number (no calculation yet)
press operator key (calculation is done and result stored somewhere and displayed on screen)*/


//Split up the operate section into different functions


/* Old operator function - stored for reference

function operatorFunction() {
  //If an operator button is clicked, save its value in the operator variable
  if(event.target.id === "add" || event.target.id === "subtract" ||event.target.id === "multiply" ||event.target.id === "divide") {
    operator = event.target.id;

    if(memoryValue.length === 0) {
      console.log("Nothing in mem")
    }

    if(memoryValue.length !== 0) {
      console.log("Something in mem")

      //Try code to say that when something is in memory, run the operator function as normal but save the result in variable and use that in a calculation?
    }

    
       //Store the value that is currently displayed in a memory array
    memoryValue = [...displayValue];
    
    //Clear the display array and display screen
    displayValue = [];

    // Loop through the operators to identify the one that was clicked. Add the clicked class to it.

    functionKeys.forEach(key => {
      if(key.id === event.target.id) {
        event.target.classList.add("clicked")
      }

      //If anything else has clicked status, remove it
      else if(key.classList.contains("clicked")) {
        key.classList.remove("clicked")

      }

      else return 
      

    })

 //Add this so that decimals can be used again, after an operator has been selected
 if(numbers[10].classList.contains("decimal")){
  numbers[10].classList.remove("decimal")
}
    
  }
       

}

*/

