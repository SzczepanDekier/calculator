const input = document.getElementById("input")
const liczba1 = document.getElementById("liczba1")
const number = document.querySelectorAll("#liczba")
const previousAction = document.getElementsByClassName("previous-action")
for (const element of number) {
    element.addEventListener('click', () => {
        input.value += element.value
        //    console.log(input)
    })
    //console.log(element)
}
const buttonsOperators = document.getElementsByClassName("operator")
const percentIcon = document.getElementById("percent")
const divisionIcon = document.getElementById("division")
const multiplicationIcon = document.getElementById("multiplication")
const minusIcon = document.getElementById("minus")
const plusIcon = document.getElementById("plus")
const equalIcon = document.getElementById("equal")

for (const operator of buttonsOperators) {
    operator.addEventListener(`click`, () => {
        console.log(operator.id)
        switch (operator.id) {
            case "button-multiplication":
                multiplicationIcon.style.display = "block"
                percentIcon.style.display = "none"
                divisionIcon.style.display = "none"
                minusIcon.style.display = "none"
                plusIcon.style.display = "none"
                equalIcon.style.display = "none"
                break;
            case "button-minus":
                multiplicationIcon.style.display = "none"
                percentIcon.style.display = "none"
                divisionIcon.style.display = "none"
                minusIcon.style.display = "block"
                plusIcon.style.display = "none"
                equalIcon.style.display = "none"
                break;
            case "button-plus":
                multiplicationIcon.style.display = "none"
                percentIcon.style.display = "none"
                divisionIcon.style.display = "none"
                minusIcon.style.display = "none"
                plusIcon.style.display = "block"
                equalIcon.style.display = "none"
                break;
            case "button-division":
                multiplicationIcon.style.display = "none"
                percentIcon.style.display = "none"
                divisionIcon.style.display = "block"
                minusIcon.style.display = "none"
                plusIcon.style.display = "none"
                equalIcon.style.display = "none"
                break;
            case "button-equal":
                multiplicationIcon.style.display = "none"
                percentIcon.style.display = "none"
                divisionIcon.style.display = "none"
                minusIcon.style.display = "none"
                plusIcon.style.display = "none"
                equalIcon.style.display = "block"
                break;
            case "button-percent":
                multiplicationIcon.style.display = "none"
                percentIcon.style.display = "block"
                divisionIcon.style.display = "none"
                minusIcon.style.display = "none"
                plusIcon.style.display = "none"
                equalIcon.style.display = "none"
                break;
            default:
                break;
        }
    })
}
const clearInputIcon = document.getElementById("AC")
clearInputIcon.addEventListener(`click`, () => {
    input.value = ``
    multiplicationIcon.style.display = "none"
    percentIcon.style.display = "none"
    divisionIcon.style.display = "none"
    minusIcon.style.display = "none"
    plusIcon.style.display = "none"
    equalIcon.style.display = "none"

})
const plusminusIcon = document.getElementById("plusminus")
plusminusIcon.addEventListener(`click`, () => {
    if (input.value.search("-") !== -1) {
        input.value = input.value.substring(1)
    } else {
        input.value = `-${input.value}`
    }
})
const dotIcon = document.getElementById("dot")
dotIcon.addEventListener(`click`, () => {
    if (!input.value) return
    console.log(input.value.includes("."))
    if (!input.value.includes(".")) {
        input.value += "."
    }
})



