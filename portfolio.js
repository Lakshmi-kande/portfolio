const dynamicContent = document.getElementById('dynamic-text');

const phrases = ['Student in HVA...','BSC graduated...','Good listener...']
const DELAY_TIME = 200; // in ms

const delay = (mSeconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, mSeconds)
  })
}

const printChars = async (phrase) => {
  for (let iter = 0; iter < phrase.length; iter++) {
    const char = phrase[iter];
    dynamicContent.textContent += char;
    await delay(DELAY_TIME);
  }
}

const clearDynamicContent = () => dynamicContent.textContent = '';

const printAllPhrases = async (phrases) => {
  for (let phrase of phrases) {
    clearDynamicContent();
    await printChars(phrase);
  }
}

printAllPhrases(phrases);

// const dynamicContent=document.getElementById("dynamic-text");
// console.log(dynamicContent)

// const phrases=["Student in HVA...","BSC graduated...","Good listener..."]
// let phraseIndex=0;
// let letterIndex=0;
// // const typingSpeed =150;
// // const erasingSpeed = 75; 

// function printLetters(phrases){

//     if(letterIndex === phraseIndex.length){
//         clearLetters();
//     }
//     else if(letterIndex < phrases.length){
//         dynamicContent.textContent += phrases.charAt(letterIndex);
//         letterIndex += 1;
//         setTimeout(function () {
//             printLetters(phrases)
//         }, 200)
//     }
// }
// function clearLetters(){
//     if(letterIndex == -1){
//         phraseIndex = (phraseIndex+1) % phrases.length;
//         letterIndex = 0;
//         printLetters(phrases[phraseIndex])     
//     }
//     else if(letterIndex > -1){
//         let updatedphrase = "";
//         for(let index = 0; index < letterIndex; index++){
//             updatedphrase += phrases[phraseIndex].charAt(index);
//         }
//         console.log(updatedphrase);
//         dynamicContent.textContent = updatedphrase;
//         letterIndex -= 1;
//         setTimeout(clearLetters, 100)
//     }
// }

// printLetters(phrases[phraseIndex])
