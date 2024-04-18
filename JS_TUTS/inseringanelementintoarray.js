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
a.splice(5,0,6);
console.log(a);