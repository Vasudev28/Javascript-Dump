var a="hello world";
var c=0;
var v=0;
for(i=0;i<a.length;i++){
    if(a[i]=='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'||a[i]=='u'){
     c++
    }
    else if(a[i]!=''){
        v++;
    }
}
console.log(c);
console.log(v);