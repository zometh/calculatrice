
let result = document.getElementById('header');
result.addEventListener("click", function (){
    result.innerHTML = "kkk";
})
const items = document.querySelectorAll("#item");
items.forEach(item => item.addEventListener("click", function (){
    let value = item.textContent;
    let content = result.textContent;
    if(content == "0"){
        result.innerText = value;  
    }
    else{
        result.innerHTML = content + " " + value;
    }
}))
