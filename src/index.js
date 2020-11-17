import { createStore } from "redux";

const countModifier = (count = 0, action) => {
  if (action.type === "add") {
    return count + 1;
  } else if (action.type === "minus") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "add" });
countStore.dispatch({ type: "add" });
countStore.dispatch({ type: "add" });
countStore.dispatch({ type: "add" });
countStore.dispatch({ type: "minus" });
countStore.dispatch({ type: "minus" });

console.log(countStore.getState());
