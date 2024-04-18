var a=721;
var b=a.toString();
var v='';
var i=b.length-1;
function rever(){
while(i>=0){
    v += b[i];
    i--;
}
v=parseInt(v);
return v;

}

console.log( rever() );

console.log(typeof(v));