const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')



list.addEventListener('click', function (event) {
    if (event.target.nodeName === 'BUTTON') {
        event.target.parentElement.remove()
    }
})

function newTodo() {
    //alert('New TODO button clicked!')

    const listCount = list.querySelectorAll('li').length

    const item = document.createElement('li')
    if (listCount) {
        const lastTask = list.lastChild.textContent
        item.textContent = "New TODO Nº " + (parseInt(lastTask.substr(12)) + 1)
    } else {
        item.textContent = "New TODO Nº " + (listCount + 1)
        //item.textContent = lastTask
    }
    const deleteItem = document.createElement('button')
    deleteItem.textContent = "Delete Task"
    item.appendChild(deleteItem)
    list.appendChild(item)

}


