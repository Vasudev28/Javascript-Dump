var v=1;
function fact(n)
{
    for(i=n;i>0;i--){
        v*=i;
    }
    return v;
}
console.log(fact(7));