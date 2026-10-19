let paragraphElement = document.getElementById("hex-code");
let buttonElement = document.getElementById("button");
let divElement = document.getElementById("div");


buttonElement.addEventListener("click", function(){
    let hexcharacters = "0123456789ABCDEF";
    let color = "#";
    
    for (let i = 0; i<6; i++){
        let index = Math.floor(Math.random()*16);
        color = color + hexcharacters[index]
    }
    
    paragraphElement.textContent = color;
    divElement.style.backgroundColor = color;
});