const dynamicContent=document.getElementById("dynamic-text");
console.log(dynamicContent)

const phrases=["Student in HVA...","BSC graduated...","Good listener..."]
let phraseIndex=0;
let letterIndex=0;
// const typingSpeed =150;
// const erasingSpeed = 75; 

function printLetters(phrases){

    if(letterIndex === phraseIndex.length){
        clearLetters();
    }
    else if(letterIndex < phrases.length){
        dynamicContent.textContent += phrases.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(function () {
            printLetters(phrases)
        }, 200)
    }
}
function clearLetters(){
    if(letterIndex == -1){
        phraseIndex = (phraseIndex+1) % phrases.length;
        letterIndex = 0;
        printLetters(phrases[phraseIndex])     
    }
    else if(letterIndex > -1){
        let updatedphrase = "";
        for(let index = 0; index < letterIndex; index++){
            updatedphrase += phrases[phraseIndex].charAt(index);
        }
        console.log(updatedphrase);
        dynamicContent.textContent = updatedphrase;
        letterIndex -= 1;
        setTimeout(clearLetters, 100)
    }
}

printLetters(phrases[phraseIndex])
