// if
if(""){
    console.log("True");
} else{
    console.log("False");
}

if(18)
    console.log("18");

if(undefined){
    console.log("True");
} else{
    console.log("False");
}

if(0){
    console.log("True");
} else{
    console.log("False");
}


if (false)
    ;
  console.log("Second state is run");

// ladder if
// let marks = 65;
let marks = 45;
if (marks >= 90) {
    console.log(marks, "has Grade A+");
} else if (marks >= 80) {
    console.log(marks, "has Grade A");
} else if (marks >= 70) {
    console.log(marks, "has Grade B");
} else if(marks >=60){
    console.log(marks, "has Grade C")
}
 else {
    console.log(marks, "has Grade D");
}

// iterative
let age = 22;
let percentage = 75;
if (age >= 18) {
    if ( percentage >= 70) {
        console.log("Eligible for apply job");
    } else {
        console.log("Not elegible for apply job");
    }
} else {
    console.log("You are not fit for this positon");
}

//for loop
for(let i=0;i<6;i++){
    console.log("Iteration: "+i)
}

// for(;;){
//     ;
//     console.log("for is not working....")   //infinity
// }

for (let j=0; j<5;){
    console.log(j);
    j++;
}

let a=[1,5,6,7];
for(let i=0;i<5;i++){
    console.log("For using:"+ a[i]);
}

let i=0;
while(i<a.length){
    console.log("Array element:"+a[i]);
    i++;
}

i=0;
do{
    console.log("Do while element");
}while(i>0){
    console.log("While also working")
}