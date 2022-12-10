const input = document.getElementById("input")
const jeden = document.getElementsByClassName('button-jeden')
const liczba1 = document.getElementById("liczba1")
const liczba = document.querySelectorAll("#liczba")
const operator = document.querySelectorAll("#operator")
const wyswietl = document.getElementById("wyswietl")
const del = document.getElementById("del")
const ac = document.getElementById("AC")
const ikona = document.querySelectorAll("#ikonki")
for (const element of liczba) {
    element.addEventListener('click', () => {
        input.value += element.value
        //    console.log(input)
    })
    //  console.log(element)
}
for (const op of operator) {
    op.addEventListener(`click`, () => {
        for (const ik of Object.entries(ikona)) {
            wyswietl.innerHTML = ik
            console.log(ikona.value)
        }
    })
}
ac.addEventListener(`click`, () => {
    input.value = ``
    wyswietl.innerHTML = ``
})
