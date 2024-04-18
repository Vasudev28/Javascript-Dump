var a=[5,3,4,1,];
var c=0;
function miss(){
    for(i=0;i<a.length;i++){
        if(a[i]!=2){
            c++;
        }
    }
    if(c>0){
        console.log(`c is ${c}`);
        return " 2 is missing";
    }
}
console.log(miss());