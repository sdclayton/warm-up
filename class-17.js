// EXERCISE #1
function isAnagram(first, second) {
    let firstWord = first.length;
    let secondWord = second.length;

    if(firstWord != secondWord) {
        console.log("These's words are not the same length")
    }

    let wordOne = first.split('').join('');
    let wordTwo = second.split('').join('');

    if(wordOne === wordTwo){
        console.log(true);
    } else {
        console.log(false);
    };
}

isAnagram('cinema', 'iceman');
isAnagram('orange', 'yellow'); 

// GERMAN's EXAMPLE
function isAnagram(first, second) {
    console.log(first.split('').sort().join() === second.split('').sort().join())
}

// EXERCISE #2
function nameCount(name, sentence) {
    
    let words = sentence.split('');

    for(let i = 0; i < words.length; 1++) { 
        if(words[i] === include(name)) {

        }
    }
    // console.log(count)
  
}

let person = 'John';
let announcement = 'let announcement = "Congratulations John! John is a yoga master since the beginning of next week. A lot of last week began when John was only a banana. Trees from nectarines became apparent when he began mastering the weather';

nameCount(person, announcement);
