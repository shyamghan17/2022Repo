var personArr = [
  {
    personId: 123,
    name: "Jhon",
    city: "Melbourne",
    phoneNo: "1234567890"
  },
  {
    personId: 124,
    name: "Amelia",
    city: "Sydney",
    phoneNo: "1234567890"
  },
  {
    personId: 125,
    name: "Emily",
    city: "Perth",
    phoneNo: "1234567890"
  },
  {
    personId: 126,
    name: "Abraham",
    city: "Perth",
    phoneNo: "1234567890"
  }
];
// console.table(personArr, ["name", "personId", "city","phoneNo"]);

// console.count(personArr.name, ["name", "personId", "city","phoneNo"]);
// console.count(Number('42.3'));
// console.count('42.3');
// console.dir(personArr)
function sum(...arguments) {
    if (arguments.length === 1) {
    const [firstArg] = arguments
    if (firstArg instanceof Array) { //firstArg is something like [1, 2, 3]
    return sum(...firstArg) //calls sum(1, 2, 3) }
    }
    return arguments.reduce((a, b) => a + b) }
    console.log(sum(1, 2, 3)) //6 console.log(sum([1, 2, 3])) //6 console.log(sum(4)) //4
}