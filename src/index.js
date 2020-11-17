import { createStore } from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("p");

number.innerHTML = 0;

const ADD = "add";
const MINUS = "minus";

//reducer
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

//store
const countStore = createStore(countModifier);

//subscribe
const onChange = () => {
  //getState
  number.innerHTML = countStore.getState();
};

countStore.subscribe(onChange);

//dispatch
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
