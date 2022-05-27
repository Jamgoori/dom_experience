// // single element
// const form = document.querySelector("#todo-list");
// console.log(form);


// // multiple element

// itmes.forEach((item) => {
//     console.log(item);
// })


// console.log(document.getElementsByClassName('item'))
// console.log(document.getElementsByTagName('li'))

const itmes =  document.querySelectorAll(".item");
const todos = document.querySelector("#todo-list");
const button = document.querySelector(".submit");
const msg = document.querySelector("#msg");
button.addEventListener('click', onsubmit);
// // todos.lastElementChild.remove();
// todos.firstElementChild.textContent = 'Hello';
// todos.lastElementChild.innerHTML = '<h1>HEllo</h1>'




// button.addEventListener(어떤이벤트, 어떤기능)

// button.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log(e.target);
//     // e.target.style.color = 'red'
// })



const todoInput = document.querySelector("#todo-input");

function onsubmit(e){
    e.preventDefault();
    if(todoInput.value === ''){
        msg.style.display ='block'
        setTimeout(()=> msg.style.diplay='none',2000)
        return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add('item')
    // console.log(todoInput.value);
    todos.appendChild(li);
    todoInput.value = '';

}