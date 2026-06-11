//problem:1
let main = (document.getElementById("main-content"));
console.log(main.children);
let render = document.querySelectorAll("render");
for (let i = 1; i < render.length; i++) {
    document.body.innerHTML += render[i].innerHTML + "";
}

document.getElementById('first-name').value = "Alex";
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";

//problem:2
let formContent = document.querySelector("#form-content");
console.log(formContent.nodeType);
let lastName = document.querySelector("#last-name");
console.log(lastName.nodeType);
console.log(lastName.childNodes);
document.getElementById("lastName").innerHTML = "Last Name: Smith";
let mainContent = document.querySelector("#main-content");
console.log(mainContent.firstElementChild);
console.log(mainContent.lastElementChild);
console.log(lastName.previousElementSibling);
let email = document.querySelector("#email");
console.log(email.parentNode);
console.log(email.nodeType);








