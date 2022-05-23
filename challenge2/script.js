const mainContainer = document.querySelector("main");
const equationField = document.querySelector("input");
const solveButton = document.querySelector("button");
const solutionDisplay = document.querySelector("h3");

solveButton.addEventListener("click", function() {
    // Clears the solution contents on each click
    solutionDisplay.innerHTML = ``;
    
    // Write your code here 👇
    let equationValue = equationField.value;
    let equationList = equationValue.split(" "); (3 + 5) 
    let numb1 = parseInt(equationList[0]);
    let numb2 = parseInt(equationList[2]);
    let result;
    switch (equationList[1]) {
        case "+":
            result = numb1 + numb2;
            break;
        case "-":
            result = numb1 - numb2;
            break;
        case "*":
            result = numb1 * numb2;
            break;
        case "/":
            result = numb1 / numb2;
            break;
    }
    let component = document.createElement('p');
    component.classList.add('equation-component');
    solutionDisplay.appendChild(component);
    component.textContent = result;
})

