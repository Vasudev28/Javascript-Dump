// sorting in ascending order

var a=[34,22,14,55];
var t;
for(i=0;i<=a.length;i++){
  for(j=i+1;j<=a.length;j++){
    if(a[i]<a[j]){
    t=a[j];
    a[j]=a[i];
    a[i]=t;
    }
  
  }
}console.log(a);

//Sorting in Descending order 

var a=[34,22,14,55];
var t;
for(i=0;i<=a.length;i++){
  for(j=i+1;j<=a.length;j++){
    if(a[i]>a[j]){
    t=a[j];
    a[j]=a[i];
    a[i]=t;
    }
  
  }
}console.log(a);