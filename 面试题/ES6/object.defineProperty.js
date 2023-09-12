/**
 * Object.defineProperty 
 */
let o = {};
Object.defineProperty(o, 'a', {
  value: 1,
  // writable: false
})
o.a = 2

for (let key in o) {
  console.log('key:', key);
}

console.log(o.a);