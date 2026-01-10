let switchButton = document.querySelector("#switch");
let body = document.body;
let heading = document.querySelector("h1");
switchButton.addEventListener("click",function(){
    if(body.style.backgroundColor === "black"){
        body.style.backgroundColor = "white";
        switchButton.textContent = "TURN OFF";
        heading.style.color = "black";
        heading.textContent="The lights are turned on";
    }
    else{
        body.style.backgroundColor = "black";
        switchButton.textContent = "TURN ON";
        heading.style.color = "white";
        heading.textContent="The lights are turned off";
    }
});