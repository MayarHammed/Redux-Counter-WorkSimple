
import { INCREMENT, DECREMENT, RESET   } from "./Type";

export const ReducerCounter = (stateinit = { counter: 0  }, action) => {
  if (action.type === INCREMENT) {
    return { counter: stateinit.counter + 1 };
  }
  if (action.type === DECREMENT) {
    return { counter: stateinit.counter - 1 };
  }
  if (action.type === RESET) {
    return { counter: 0 };
  }
  



  return stateinit;
};


