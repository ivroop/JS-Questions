// Q. Write a function findLongestWord that takes a string as an input and return the longestWord in the string. If there were multiple longest words, return the first one encountered.

function findLongestWord(str){
    let str2="";
    str=str.split(" ")
    console.log(str);    
    for(let i=0; i<str.length; i++){
        if(str[i].length > str2.length){
            str2 = str[i];
        }
    }
    return str2;
}
console.log(findLongestWord("Poorvi is good girlfriend"));

