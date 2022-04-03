var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let requestButton = document.getElementById("requestButton");
let dice = document.querySelector('.button__dice');
let adviceId = document.getElementById("adviceId");
let adviceContent = document.getElementById("adviceContent");
let test;
function getAdvice() {
    dice.classList.toggle("pressed");
    let request = fetch("https://api.adviceslip.com/advice");
    request.then(resp => resp.json(), err => {
        dice.classList.toggle("pressed");
        dice.classList.toggle("failed");
        adviceContent.innerText = err;
    }).then((data) => __awaiter(this, void 0, void 0, function* () {
        yield setTimeout(() => {
            adviceContent.classList.add("advice__content");
            adviceId.innerText = `ADVICE # ${data.slip.id}`;
            adviceContent.innerText = data.slip.advice;
            dice.classList.toggle("pressed");
            test = data.slip.advice;
        }, 1000);
    })).finally(() => {
        dice.classList.toggle("failed", false);
    });
}
