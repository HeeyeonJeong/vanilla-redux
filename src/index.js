import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "ADD_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action }];
    case DEL_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const handleSubmit = (event) => {
  event.preventDefault();
  const todo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: todo });
};

form.addEventListener("submit", handleSubmit);
