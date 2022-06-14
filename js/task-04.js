const decrement = document.querySelector("[data-action = 'decrement']");
const increment = document.querySelector("[data-action = 'increment']");
let counterValue = 0;
const counter = document.querySelector('#value');

const onDecrementButtonCLick = () => {
    counterValue -= 1
    counter.textContent = counterValue;
}

const onIncrementButtonCLick = () => {
    counterValue += 1
    counter.textContent = counterValue;
}

decrement.addEventListener("click", onDecrementButtonCLick)
increment.addEventListener("click", onIncrementButtonCLick)