const span = document.querySelector('#name-output');
const input = document.querySelector('#name-input');

input.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value
    if (inputValue === "") {
        span.textContent = "Anonymous"
    } else {
        span.textContent = inputValue
    }
})