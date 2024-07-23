export default function returnHowManyArguments(...args) {
  let argCount = 0;
  // eslint-disable-next-line no-unused-vars
  for (const _ of args) {
    argCount += 1;
  }
  return argCount;
}
