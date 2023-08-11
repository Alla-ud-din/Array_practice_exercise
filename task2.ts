import arr from './task1'
//console.log(arr);
let even = [];
let odd = [];
console.log("Odd Numbers are")
for (let i = 0; i<arr.length; i++){
    if (arr[i]%2==0){
        even[i]= arr[i]
        //console.log(even[i]);
    }
    else {
        odd[i]=arr[i];
        console.log(odd[i])
    }
}
