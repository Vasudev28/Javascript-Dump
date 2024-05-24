function fun(v){
var c=0;
for(i=0;i<v.length;i++){
    for(j=i+1;j<v.length;j++){
        if(v[i]==v[j]){
            c++;
            
        }
    }
}
console.log(`${v[j]} repeated ${c} times`);
return;
}fun([1,3,5,6,7,8,9,0,9,4,9]);