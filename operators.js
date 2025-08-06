// let, const, var

// a = 10;
// let a;
// console.log(a)

// a = 10;
// var a;
// console.log(a)

// {
//     var a = 12;
//     var b = 12;   // not use let
// }
// console.log(a)
// console.log(b)

// Types of Operator
// -> unary and binary

// unary -> ++ --
let a = 5;
let b = ++a + a++;
console.log(a)
console.log(b)

let c = 5;
let d = --c - c--;
console.log(c)
console.log(d)

// binary 
// arithmetic + - * / %
console.log("7a"+"2");
console.log([1,2]+[3,4]);
console.log("4"+null);
console.log(7/undefined);
console.log(0.1 + 0.2);
console.log(0.1 + 0.13);
console.log(0.1 + 0.2 == 0.3);

// relational operator < > <= >= == !=

console.log("A"<"a");
console.log("A">"110");

console.log("task");
console.log([1,4] == [1,4]);
console.log(undefined < [3,1]);
