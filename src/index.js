import { createStore } from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("p");

number.innerHTML = 0;

//reducer
const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "add") {
    return count + 1;
  } else if (action.type === "minus") {
    return count - 1;
  } else {
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
  countStore.dispatch({ type: "add" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "minus" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
