var num='7175337';
for(i=0;i<=num.length-1;i++){
    var count=0;
    for(j=0;j<=num.length-1;j++)
    {
        if(i!==j && num[i]==num[j])
            {
            count++;
         console.log(`${num[i]} is repeated so true`);
            break;
        }
        
    }

}
console.log(count);
// if(count==1){
//     console.log(num[i]);
// console.log(`${num[i]}is repeated so false`);
// }
