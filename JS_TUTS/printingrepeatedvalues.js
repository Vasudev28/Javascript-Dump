var c=0;
var a=[1,6,3,1,5,9,7,2,1,9,3,7,8,9,10];
function rep(){
    for(i=0;i<=a.length;i++){
        if(a[i]==1){
            c++;
        }

    }
    if(c>0)
    {
        console.log(`1 repeated ${c} times`);
    }
}
rep();
