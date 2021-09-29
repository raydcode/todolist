const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUl = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));


const updateList =()=>{
    let todosEl = document.querySelectorAll('li');   
    const todos = [];
    todosEl.forEach(todoEl => {
       todos.push({
           text:todoEl.innerText,
           completed: todoEl.classList.contains('completed')
       })
    });
    localStorage.setItem('todos',JSON.stringify(todos));
}


const addTodo =(todo)=>{
    let todoText = input.value;
     if(todo){
     todoText = todo.text;
     }
    if(todoText){
        const todoEl = document.createElement('li');
        if(todo && todo.completed){
            todoEl.classList.add('completed');
        }

        todoEl.innerText = todoText;
                 
        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('completed');
            updateList();
        })
         
        todoEl.addEventListener('contextmenu',(event)=>{
            event.preventDefault();
            todoEl.remove();
            updateList();
         })


         todoUl.appendChild(todoEl);
         input.value='';
         updateList();
    }

}



if(todos){
    todos.forEach(todo => addTodo(todo));
}


 form.addEventListener('submit',(event) => {
    event.preventDefault();
    addTodo();      
});








