getTodos = document.getElementById('get-todos')

let inputField = document.getElementById('input')
//let todoItem = inputField.value;

let todoBox = document.getElementById('todo-box')

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

getTodos.addEventListener('click', ()=>{
	//console.log(todoItem)
	todoBox.appendChild(todoListBox)
	todoListItem.textContent = inputField.value 
	inputField.value = ''
})

let editBtn;

function setTodos(){
	editBtn.onclick = ()=>{
	todoListItem.remove(  )                                            	
	}
	
}

function deleteTodos(){
	if (checkbox.checked){	
		nmtodoListItem.remove()
	}
}

/*
<div>
	<li></li>
	<input type="checkbox"
</div>


*/