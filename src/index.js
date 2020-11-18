import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

//action function,add/delete
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deletToDo = (id) => {
  return {
    type: DEL_TODO,
    id,
  };
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DEL_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

//dispatch,add/delete
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeletToDo = (event) => {
  const id = parseInt(event.target.parentNode.id);
  store.dispatch(deletToDo(id));
};

//paintToDo
const paintToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerHTML = "del";
    btn.addEventListener("click", dispatchDeletToDo);
    li.id = toDo.id;
    li.innerHTML = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDo);

const handleSubmit = (event) => {
  event.preventDefault();
  const todo = input.value;
  input.value = "";
  dispatchAddToDo(todo);
};

form.addEventListener("submit", handleSubmit);
