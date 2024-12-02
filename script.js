var display =  document.getElementById('result');

var result = "";

document.getElementById('equal').addEventListener(
    "click", () => {
        
        display.innerHTML = eval(result);
        //clear();
        
        
    }
);
document.getElementById('clear').addEventListener(
    "click", () => {
        display.textContent = 0;
        result = "";
    }
);
function clear(){
    document.getElementById('result').textContent = 0;
    
    result = "";
}
const values = document.querySelectorAll('#value');
const operators = document.querySelectorAll('#operator');
operators.forEach(operator => operator.addEventListener(
    'click', () =>{
        let op = getOperator(operator.textContent);
        display.textContent += op;
        result =  display.textContent;
      
    }
));
values.forEach(value => value.addEventListener('click', function (){
    if(display.textContent == "0"){
        display.textContent = '';
    }
    display.textContent = display.textContent + value.textContent;
    result =  display.textContent;
}));
function getOperator(operator){
    switch (operator) {
        case "+":
            return "+";
        case "-":
            return "-";
        case "÷":
            return '/';
        
    
        default:
            return "*";
    }
}