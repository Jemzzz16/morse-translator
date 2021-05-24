export const translateEnglishToMorse = (english) => {
  
}
//////////////////////////////////////////////////////////
const inPut = document.getElementById("in");
const outPut = document.getElementById("out");

const button = document.querySelector('buttons').addEventListener('click', => {
  inPut = outPut.value;
	outPut.value = "";
  const result = translate(letter);

});
