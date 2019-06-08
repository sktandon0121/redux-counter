const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

export const decrement = () => ({ type: DECREMENT });

export function increment() {
  return {
    type: INCREMENT
  };
}

export const reset = () => ({ type: RESET });
