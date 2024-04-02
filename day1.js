// Q. Write a function findLongestWord that takes a string as an input and return the longestWord in the string. If there were multiple longest words, return the first one encountered.

//Constrain

//? The input string may contain alphabetic characters , digits , spaces , and punctuation 
//the input string is non empty 
// the input string may contain multiple word seperated by spaces 

//note 
//if the input string is empty or contain only whitespaces the function should return an false 
// the function should ignore leading and trailing whitespace when determining the longest word


// function findLongestWord(str){
//     let str2="";
//     str=str.split(" ")
//     console.log(str);    
//     for(let i=0; i<str.length; i++){
//         if(str[i].length > str2.length){
//             str2 = str[i];
//         }
//     }
//     return str2;
// }
// console.log(findLongestWord("Poorvi is good girlfriend"));

const findLongestWord = (str) => {
    if(str.trim().length === 0){
        return false;
    }

    str2 = str.split(" ");
//     str2 = str2.sort((a, b) => b.length - a.length);
//     return str2[0];
    return str2.reduce(
        (accu, curWord) => (curWord.length > accu.length ? curWord : accu)
    )
}
console.log(findLongestWord("Poorvi and Ayaan are in relationshipppp"));

