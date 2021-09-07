const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = (todo) => {
 let html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
     <span>${todo}</span>
     <i class="far fa-trash-alt delete"></i>
    </li>
    `;
 list.innerHTML += html;
};
addForm.addEventListener("submit", (e) => {
 e.preventDefault();
 const todo = addForm.add.value.trim();
 //  console.log(todo);
 if (todo.length) {
  //if a postive number its going to equal true
  generateTemplate(todo);
 }
 addForm.reset(); // clears the previous forms input
});

////
//* delete todos
////
list.addEventListener("click", (e) => {
 if (e.target.classList.contains("delete")) {
  console.log("trash can clicked");
  e.target.parentElement.remove();
 }
});
