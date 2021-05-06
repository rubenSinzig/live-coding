// Year for Copyright
const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;

// event for click
const todos = document.querySelector(".todos");
const comments = document.querySelector(".comments");
todos.addEventListener("click", fetchTodos);
comments.addEventListener(".click", fetchComments);

// function for todos
function fetchTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h3>Todos API response</h3> ";
      data.forEach((todo) => {
        let { id, title, completed, userId } = todo;
        output += `
        <div id="${id}" class="api-class">
        <h4>Your User-ID is: ${userId}</h4>
        <p>ToDo: ${title}</p>
        <p>Completed: ${completed}</p>
        </div>
        `;
      });
      document.querySelector(".resultTodos").innerHTML = output;
    })
    .catch((err) => console.log(err));
}
