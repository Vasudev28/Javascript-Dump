var a="ab12cd34ef56";
var str;
for(i=0;i<=a.length;i++){
    if(isNaN(a[i])){
        str+=a[i];
    
    }
    else{
        var d="";
        while(!isNaN(a[i])){
            d+=a[i];
            i++;
            console.log(d);
        }

    }
}