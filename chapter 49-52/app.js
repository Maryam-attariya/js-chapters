//problem:1
let form = document.getElementById("signupForm");
let output = document.getElementById("output");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    output.innerHTML = `
        <h3>Submitted Data</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
    `;
});

//problem:2
function showMore() {
    document.getElementById("more").style.display = "inline";
}

//problem:3
function deleteItm(btn) {
    btn.parentNode.parentNode.remove();
}
function edit(btn) {
    let row = btn.parentNode.parentNode;
    let name = prompt("Enter new name");
    row.children[1].innerText = name;
    let mark = prompt("Enter new mark");
    row.children[2].innerText = mark;
}
