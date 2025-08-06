// for(;;){
//     ;
//     console.log("for is not working....")   //infinity
// }

// Advance for loop
let arr = [1,2,3,4,5,1,2]
for(let a of arr){  
    console.log(a);
}

for(let a in arr){  
    console.log(a);
}

for (let b of arr){
    if(b==3)
        // continue;
        break;
    console.log(b)
}

for (let m of arr){
    if(m == 2){
        break;
    }
    console.log("Array Elements:"+m)
}

let object = {name:"Ajay", age : 23, qual:"mca"};
for (let key in object){
    console.log("Values:"+object[key])
}

for(let i = 0; i<5; i++){
    if(i == 3){
        // break;
        continue;
    }
    console.log("Values:"+i);
    // i++;
}

// switch case statement
let grade = "A";
switch(grade){
    case "A":
        console.log("You are Destinction");
        break;
    case "B":
        console.log("You are First Class");
        break;
    case "C":
        console.log("You are Second Class");
        break;
    default:
        console.log("You are Fail")
}