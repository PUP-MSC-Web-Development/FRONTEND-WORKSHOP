const counter = document.querySelector("#counter-text");
const buttonAdd = document.querySelector("#button-add");
const buttonSubtract = document.querySelector("#button-subtract");
let counterVal = 0;

buttonAdd.addEventListener("click", (e) => {
    counterVal += 1;
    updateCounter(counterVal);
});

buttonSubtract.addEventListener("click", (e) => {
    if (counterVal > 0) {
        counterVal -= 1;
        updateCounter(counterVal);
    }
});

function updateCounter (val) {
    counter.textContent = val;
}

