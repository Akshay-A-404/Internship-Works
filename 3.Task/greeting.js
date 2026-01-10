function sayHello(){
    let name = document.getElementById("name").value;
    document.getElementById("greetings").textContent = `Hello ${name}, welcome to the team!`;
}
