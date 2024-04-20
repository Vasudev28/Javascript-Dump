// Write a program to print the prime numbers in reverse order in a given range.
function prime(n){
    for(i=n;i>=2;i--){
        if(i%2==0 && i%3==0){
            console.log(`${i} is not a prime`);
        }
        else{
            console.log(`${i} is a prime`)
        }
    }
}prime(7);