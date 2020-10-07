export function checkBrackets(str: string) {
  const regex = /\(\)|\[\]|\{\}/g;

  let tempStr = str;
  let prevLength: number;

  do {
    prevLength = tempStr.length;
    tempStr = tempStr.replace(regex, "");
  } while (tempStr.length !== prevLength);

  return tempStr.length === 0;
}
