// var a="ab*cd**ef***";
// var str="";
// var stor="";
// for(i=0;i<=a.length;i++){
//     if(isNaN(a[i])){
//         str+=a[i];
//     }
//     else{
//         for(j=0;j,a.length;j++){
//             var count=0;
//             if(a[i]=="*"){
//                 count++;
//                 stor+=count;
//                 console.log(stor);
//             }
            
//         }
//     }
// }
var a="ba*na***na**";
var count=0;
var stor='';
if(a.includes("*"))
{
 count++;
 stor+=count;
 console.log(stor);
}