//problem:1
function showAlert() {
    alert("Hello!");
}
//problem:2
function thanks() {
    alert('Thanks for purchasing a phone from us.');
}
//problem:3
function remove(btn) {
    btn.parentNode.parentNode.remove();
}
//problem:5
let count = 0;
function increase() {
    document.getElementById("count").innerText = `Count: ${count}`;
    count++;
}
function decrease() {
    document.getElementById("count").innerText = `Count: ${count}`;
    count--;
}