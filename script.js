
var result = document.getElementById('header');
var res = 0;
document.getElementById("equal")
    .addEventListener("click", () => {
        result.innerText = res;
    })

function updateResultValue(newValue){
    const currentValue = result.textContent;
    result.innerText = currentValue + " " + newValue;
    res += parseInt(newValue);
}
const items = document.querySelectorAll("#item");
items.forEach(item => item.addEventListener("click", function (){
    let value = item.textContent;
    updateResultValue(value);
}))
