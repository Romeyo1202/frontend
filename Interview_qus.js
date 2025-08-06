// String
// duplicates

// let arr = [3,5,2,6,4,3,6]
// let obj = {}
// for (let a of arr){
//     if(!obj[a]){
//         obj[a] = 1;
//     }
//     else{
//         obj[a]++;
//     }
// }
// for (let i in obj){
//     if(obj[i]>1){
//         console.log("Duplicate Values:"+i)
//     }
// }
// for (let i in obj){
//     if(obj[i]==1){
//         console.log("Unique Values:"+i)
//     }
// }

// find Second Largest
let numbers = [3,5,2,6,4,3,6,9]
let Largest = 0;
let secondLargest = 0;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i]>Largest){
        secondLargest = Largest;
        Largest = numbers[i];
    }else if(numbers[i]>secondLargest && numbers[i] !== Largest){
        secondLargest = numbers[i];
    }
}
console.log("Largest:"+Largest);
console.log("Second Largest:"+secondLargest);