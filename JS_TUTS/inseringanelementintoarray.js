var a=[1,2,3,4,5,7,8,9,10];
// function inser(){
//     for(i=0;i<a.length;i++){
//         if(i==5){
//             a[5]=6;
//         }
//         else{
//             console.log(a[i])
//         }
//     }
//  return a;
// }
// console.log(inser());
// a.splice(5,0,6);
// console.log(a);
var a = [1, 2, 3, 4, 5, 7, 8, 9, 10];
function inser() {
    var newA = []; // Create a new array to store the modified elements
    var indexTo = 5; // Index where you want to insert the new element
    var valTo = 6; // New element to be inserted

    for (var i = 0; i < a.length; i++) {
        if (i === indexTo) {
            newA.push(valTo); // Insert the new element at the specified index
        }
        newA.push(a[i]); // Copy elements from the original array to the new array
        
    }
    return newA;
}

console.log(inser()); 
