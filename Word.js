const randonNumber  = (min,max)=>{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const alphaChar=()=>{
    // ascii => a = 97 , z =122
    return String.fromCharCode(randonNumber(97,122));
}

const wordChecker = (len)=>{
    let word = "";
    for (let i = 0 ; i < len ; i++){
        word+=alphaChar();
    }
    return word
}

const setOfWords =(listSize,type = "Array",wordLenMin=3,worldLenMax=8)=>{
    // For Words As Array type = Array ... For String Set type == String
    // By Default It is Array 
    if(type=="Array"){
        let arr = []
        for ( let i = 0 ; i < listSize ; i++){
            arr.push(`${wordChecker(randonNumber(wordLenMin,worldLenMax))} `)
        }
        return arr;
    }else{
        let asString= "";
        for(let i = 0 ; i < listSize;i++){
            asString+=`${wordChecker(randonNumber(wordLenMin,worldLenMax))} `
        }
        return asString;
    }
}
console.log(setOfWords(5,"String"));
