let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
const result = document.querySelector(".result");
const computer = document.querySelector(".computer");
const player = document.querySelector(".player");

rock.addEventListener('click', () => {
    rock = 0;
    player.innerHTML = "You Chose Rock";
    Play(rock);
});

paper.addEventListener('click', () => {
    paper = 1;
    player.innerHTML = "You Chose Paper";
    Play(paper);
});

scissor.addEventListener('click', () => {
    scissor = 2;
    player.innerHTML = "You Chose Scissor";
    Play(scissor);
});

function Play(player) {
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        computer.innerHTML = "Computer Chose Rock";
    } else if (x == 1) {
        computer.innerHTML = "Computer Chose Paper";
    } else if (x == 2) {
        computer.innerHTML = "Computer Chose Scissor";
    }

    if (player == x) {
        result.innerHTML = "Result : Draw";
    } else if (player == 2 && x == 0) {
        result.innerHTML = "Result : Lose";
    } else if (player == 1 && x == 2) {
        result.innerHTML = "Result : Lose";
    } else if (player == 0 && x == 1) {
        result.innerHTML = "Result : Lose";
    } else {
        result.innerHTML = "Result : Win";
    }
}