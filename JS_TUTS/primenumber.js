var c=0;
function prime(n){
for(i=2;i<n;i++){
    if(n%i==0 && i!=5 && i!=10 && i!=15){
        console.log(`${i} isnt a prime`);
    }
    else{
        console.log(c=i);
    }
}
return c;
}
prime(20);