export const add = (a,b) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error(`Invalid number: ${isNaN(a) ? a : b}`);
  }
  return Number(a) + Number(b);
}

export const subtract = () => {};

export const multiply = () => {};

export const divide = () => {};
