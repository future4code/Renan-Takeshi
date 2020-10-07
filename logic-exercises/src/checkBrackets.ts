export function checaParenteses(str: string) {
  const stack = [];

  const pairs: BracketPair = { "(": ")", "[": "]", "{": "}" };

  for (let char of str) {
    if (Object.keys(pairs).includes(char)) {
      stack.push(char);
    } else {
      const lastOpeningChar = stack.pop();
      if (!lastOpeningChar) {
        return false;
      } else if (pairs[lastOpeningChar] !== char) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}

interface BracketPair {
  [key: string]: string;
}
