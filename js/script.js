const form = document.getElementById("header__form")
const input = document.getElementById("header__input")
const addButton = document.getElementById("header__add-btn")

addButton.addEventListener("click", function (e) {
    e.preventDefault()
    return alert(input.value)
})