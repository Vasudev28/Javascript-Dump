// Write a program to print the prime numbers in reverse order in a given range.    MY VERSION
// function prime(n){
//     for(i=n;i>=2;i--){
//         if(i%2==0 && i%3==0){
//             console.log(`${i} is not a prime`);
//         }
//         else{
//             console.log(`${i} is a prime`)
//         }
//     }
// }prime(7);

// MY VERSION-2
// function prime(n){
//     for(i=n;i>=2;i--){
//         if(n%i==0){
//             console.log(`${i} is not a prime`);
//         }
//         else{
//             console.log(`${i} is a prime`)
//         }
//     }
// }prime(7);
// JavaScript Program to print prime numbers between the two numbers

function isPrime(n){

// looping from higher to lower for reverse order
for (let i =n; i >=2; i--) {
    var c = 0;
    // looping through 2 to i for the primality test 
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            c = 1;
            break;
        }
    }
    if (c == 0 && i != 1) {
        console.log(i);
    }
}
}isPrime(20)
