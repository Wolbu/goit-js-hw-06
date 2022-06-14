const input = document.querySelector("#font-size-control")
const spanText = document.querySelector("#text")


input.addEventListener("input", onRangeChange);
spanText.style.fontSize = `${input.value}px`;


function onRangeChange(elem) {
    const size = elem.currentTarget.value
    spanText.style.fontSize = `${size}px`
}