import { createStore } from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("p");

const reducer = (count = 0) => {
  return count;
};

const countStore = createStore(reducer);
console.log(countStore.getState());
