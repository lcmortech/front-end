getTodos = document.getElementById('get-todos')

let inputField = document.getElementById('input')
//let todoItem = inputField.value;

let todoBox = document.getElementById('todo-box')

let todoList = []
let todoListBox = document.createElement('div')
let todoListItem = document.createElement('li')
let todoListCheckBox = document.createElement('input')
todoListItem.setAttribute('id', 'li-item')
todoListItem.setAttribute('data-checked', false)
todoListCheckBox.setAttribute('type', 'checkbox') 
todoListBox.appendChild(todoListItem)
todoListItem.textContent =    
//let todoText = document.createTextNode()
//todoListItem.appendChild(todoText)
console.log(todoListItem)

getTodos.addEventListener('click', getTodoItem)

let editBtn = document.createElement('button');
editBtn.setAttribute('type','checkbox')

todoListBox.appendChild(editBtn)


editBtn.onclick = ()=>{
	todoListItem.innerHTML = '<input id="edit-task" type="text" placeholder="edit task" />';  
	editTask = document.getElementById('edit-task')
	todoListItem.innerText = editTask.value		
	}

//function declarations
function getTodoItem(){
	//console.log(todoItem)
	todoBox.appendChild(todoListBox)
	todoListItem.textContent = inputField.value 
	//todoList.push(todoListItem)
	todoList.forEach(item =>{ 
		
		todoList.push(item)})
	inputField.value = ''
}

function addTodoItem(){}

function editTodoItem(){}

function deleteTodoItem(){
	if (checkbox.checked){	
		nmtodoListItem.remove()
	}
}

//function invocations

/*
<div>
	<li></li>
	<input type="checkbox"
</div>


*/