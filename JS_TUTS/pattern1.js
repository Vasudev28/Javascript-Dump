// var str="";
// for(i=0;i<=4;i++){
//     for(j=0;j<=4;j++)
//         {
//             str+="*";
//             console.log(str);
           
//         }
    
// }
var str = "";

for (i = 0; i < 4; i++) { // Outer loop iterates 4 times for 4 rows
  str = ""; // Reset `str` for each row to print 4 asterisks only

  for (j = 0; j < 4; j++) { // Inner loop iterates 4 times to print 4 asterisks
    str += "*";
}
    console.log(str); // Print the complete row of 4 asterisks after inner loop

}

    // console.log("*");console.log(28);
