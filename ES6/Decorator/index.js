const test = (target) => {
  target.name = 1
}
@test
class C {

}
console.log(C.name);