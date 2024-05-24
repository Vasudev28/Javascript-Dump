var str="";
function rev(v)
{
    var b=v.toString()
    for(i=v.length-1;i>=0;i--){
        str+=v[i];
    }
    console.log(str);
    return v;
}
rev([7,8,9])