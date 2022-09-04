const letters =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 


const alphaChar=()=>{
    return  Math.floor(Math.random()*26);
}
const wordLength=(min,max)=>{
     return Math.floor(Math.random() * (max - min + 1) + min)
}
const wordChecker = (len)=>{
    let word = "";
    for (let i = 0 ; i < len ; i++){
        word+=letters[alphaChar()]
    }
    return word
}
const ArrayOfWords =(listSize,wordLenMin=3,worldLenMax=8)=>{
    let arr = []
    for ( let i = 0 ; i < listSize ; i++){
        arr.push(wordChecker(wordLength(wordLenMin,worldLenMax)))
    }
    return arr;
}

