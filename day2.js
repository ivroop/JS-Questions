// const generateHash = (str) => {
//     if(str.length>280 || str.trim().length===0){
//         return false;
//     }

//     str = str.split(" ");
//     str = str.map((curElem) => 
//         curElem.replace(curElem[0], curElem[0].toUpperCase())
//     );
//     str = `#${str.join("")}`;
//     return str;
// }

// console.log(generateHash("my name is poorvi tandel"));


const generateHash = (str) => {
    if(str.length>280 || str.trim().length===0){
        return false;
    }

    str = str.split(" ");
    str = str.map((curElem) => 
        curElem.charAt(0).toUpperCase() + curElem.slice(1)  //slice means 0th k aage 1st se saare word de do.
    );
    str = `#${str.join("")}`;
    return str;
}

console.log(generateHash("my name is poorvi tandel"));