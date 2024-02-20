// const item = document.querySelector('.item')
// const ball = document.querySelector('.ball')

// // item.onmouseleave = () => {
// //     alert('Штраф')
// // }

// ball.ondragstart = () => {

//     setTimeout(() => {
//         ball.style.display = "none"
//     }, 0);
// } 

// ball.ondragend = () => {

//     ball.style.display = "block"
// } 

// document.body.ondrop = (e) => {

//     const {x, y} = e 

//     ball.style.left = x + "px"
//     ball.style.top = y + "px"
// }

// document.body.ondragenter = (e) => {
//     e.preventDefault();
// } 

// document.body.ondragover = (e) => {
//     e.preventDefault();
// } 



let ball = document.getElementById('ball');
let goalA = document.getElementById('goalA');
let goalB = document.getElementById('goalB');
let scoreA = 0;
let scoreB = 0;

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

field.ondragover = function (event) {
    event.preventDefault();
}

field.ondrop = function (event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let draggedElement = document.getElementById(data);

    if (event.target === goalA) {
        scoreA++;
        alert("Гол! Голевой счет: " + scoreA + " - " + scoreB);
    } else if (event.target === goalB) {
        scoreB++;
        alert("Гол! Голевой счет: " + scoreA + " - " + scoreB);
    } else {
        alert("Штраф!");
    }

    document.getElementById("scoreA").innerHTML = scoreA;
    document.getElementById("scoreB").innerHTML = scoreB;

    draggedElement.style.left = '50%';
    draggedElement.style.top = '45%';
    draggedElement.style.translate = '-50%', '-50%';
}