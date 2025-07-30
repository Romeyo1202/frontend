console.log("Ajay")

let a = 12;
let a1 = 14;  
console.log(a)

// array
let b = [12, 14, 16, "ajay", true, null, undefined]
console.log(b[2])
console.log(b[7]) // undefined
b[1] = "jalj";
console.log(b)
b  [7]=12345;
// b[17] = 2555;
console.log(b)
console.log(b.length)

let c = b;
b[1] = 18;
console.log(c[1])
console.log(b[1])

// objects 
// key and pair {math:16}

let obj = {name:"ajay", age:18, marks:[2,4,6,8]};
console.log(obj.name)
console.log(obj["name"]) // preferable

obj["name"] = "romeyo";
console.log(obj)

obj["role"] = "developer";
console.log(obj)

obj["null"] = "Null_value";
console.log(obj)

// seal & freeze
// Object.seal(obj)
// Object.freeze(obj)

console.log(Object.keys(obj))
console.log(Object.values(obj))