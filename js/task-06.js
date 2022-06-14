const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(elem) {
    const dataLength = Number(input.getAttribute("data-length"))
    const inputLength = elem.currentTarget.value.length
    if (inputLength === dataLength) {
        input.classList.add("valid")
        input.classList.remove("invalid")
    } else {
        input.classList.add("invalid")
        input.classList.remove("valid")
    }

}
console.log(input.value)