const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const paintToDo = (text) => {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = text;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const todo = input.value;
  input.value = "";
  paintToDo(todo);
};

form.addEventListener("submit", handleSubmit);
