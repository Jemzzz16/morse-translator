export const translateEnglishToMorse = () => {
  const button = document.querySelector('.buttons').addEventListener('click', ()=> {
    const englishText = document.getElementById("#in").innerHTML;
    const translatedText = document.getElementById("#out").innerHTML
    const morseText = translateEnglishToMorse()
    englishText = morseText
    document.getElementById("#out").innerHTML = morseText

  });
}


// result = parseFloat(firstNumber) + parseFloat(secondNumber)

// outPut.innerHTML = ''
// inPut.value = ''

// outPut.innerHTML = morseText