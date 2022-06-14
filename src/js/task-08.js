const loginForm = document.querySelector(".login-form");
console.log(loginForm)

loginForm.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: {
            email,
            password
        }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("There should be no empty fields")
    } else {
        console.log({
            email: email.value,
            password: password.value,
        })
    }
}