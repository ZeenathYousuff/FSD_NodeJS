const firstName=require('./firstName');
const lastName=require('./secondName');
const fullName=require('./concatination')
let firstNameResult=firstName.firstName('Zeenath');
console.log(firstNameResult);
let lastNameResult=lastName.lastName('Yousff');
console.log(lastNameResult);
let fullNameRes = fullName.fullName("Zeenath","Yousff");
console.log(fullNameRes);