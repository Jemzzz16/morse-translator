export const translateEnglishToMorse = () => {
  const button = document.querySelector('.buttons').addEventListener('click', ()=> {
    const inPut = document.getElementById("#in").innerHTML;
    const outPut = document.getElementById("#out").innerHTML;
  // when button is pressed input text is changed to morse code and displayed in output
    inPut.value = outPut.value = translateEnglishToMorse();
  });
}