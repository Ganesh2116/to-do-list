let todo = document.querySelector("#todo") 
let todoBtn = document.querySelector("#todoBtn")
let todoinfor = document.querySelector("#todoinfor")
let form = document.querySelector ('form')

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  var paragraph = document.createElement('p')
  paragraph.innerText = todo.value
  todoinfor.appendChild(paragraph)
  todo.value = ""

  paragraph.addEventListener('click' ,() =>{
    paragraph.style.textDecoration = 'line-through';
  })

  paragraph.addEventListener('dblclick' ,() =>{
    todoinfor.removeChild(paragraph)
  })
})
