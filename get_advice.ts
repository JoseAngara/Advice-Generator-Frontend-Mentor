let requestButton = document.getElementById("requestButton") as HTMLButtonElement;
let dice = document.querySelector('.button__dice') as HTMLElement;

let adviceId = document.getElementById("adviceId") as HTMLElement;
let adviceContent = document.getElementById("adviceContent") as HTMLElement;
let test: string;

function getAdvice() {
    dice.classList.toggle("pressed");
    let request = fetch("https://api.adviceslip.com/advice");
    request.then(resp => resp.json(), err => {
        dice.classList.toggle("pressed");
        dice.classList.toggle("failed");
        adviceContent.innerText = err;
    }).then(async data => {
        await setTimeout(() => {
            adviceContent.classList.add("advice__content");
            adviceId.innerText = `ADVICE # ${data.slip.id}`;
            adviceContent.innerText = data.slip.advice;
            dice.classList.toggle("pressed");
            test = data.slip.advice;
        },1000);
    }).finally(() => {
        dice.classList.toggle("failed", false);
    })

}