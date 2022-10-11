// For every number that is a multiple of 3, log to the console "Fizz". For every number that is a multiple of 5, log to the console "Buzz". For every number that is a multiple of 5 and 3, log to the console "Fizz Buzz".

 for(let i = 0; i <= 100; i++) {
    if(i % 3 == 0 && 5 == 0){
        console.log(i, 'Fizz Buzz')
    }

    if(i % 3 === 0) {
        console.log('Fizz');
    } else if(i % 5 == 0) {
        console.log('Buzz');
    }
 }
