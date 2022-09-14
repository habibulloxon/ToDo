const input = document.getElementById("header__input")
const addButton = document.getElementById("header__add-btn")

addButton.addEventListener("click", function () {

    if(input.value.trim() != 0){
        let localItems = 
        JSON.parse(localStorage.getItem('localItem'))

        if (localItems === null) {
            taskList = []
        } else{
            taskList = localItems
        }
        taskList.push(input.value)
        localStorage.setItem('localItem', JSON.stringify(taskList))
    }
    input.value = ""
    showItems()
})

function showItems() {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if(localItems === null){
        taskList = []
    } else{
        taskList = localItems
    }
    let UI = ""
    let taskShow = document.getElementById("header__list")
    taskList.map((item, index)=> {
        UI += `
        <li>
            <p>${item}</p>
            <button onclick="deleteItem(${index})">Done</button>
        </li>
        `
    })
    taskShow.innerHTML = UI
}
showItems()

function deleteItem(index) {
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList));
    window.location.reload()
}
// localStorage.clear()