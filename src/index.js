document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener(`submit`,(e)=>{
    e.preventDefault()
    console.log(e.target)
    buildToDo(e.target[`new-task-description`].value)
  })
});
function buildToDo(todo){
  let li=document.createElement(`li`)
  li.textContent=todo
  document.querySelector(`#tasks`).appendChild(li)
}
