var c=0;
function fun(v){
for(i=0;i<v.length;i++){
    for(j=i+1;j<v.length;j++){

        if(v[i]==v[j]){
            
            console.log(`${v[i]} repeated`)
        }
    }

}
return;
}fun([1,3,5,6,7,8,9,0,9]);