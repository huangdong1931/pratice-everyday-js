const uploadFn = (p) => {
  Object.assign(p, {a: 1})
  return p
}

const downloadFn = (p) => {
  Object.assign(p, {b: 2})
  return p
}

const reqList = new Map([
  ['upload', uploadFn],
  ['download', downloadFn],
])

console.log(reqList.has('upload1'));
console.log(reqList.get('upload')({ data: { a: 1, b: 2} }));
