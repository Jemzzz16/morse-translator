import { makeWord, translateEnglishToMorse } from "./translator.js";

const clearBtn = document.querySelector('#clear')
const inputBox = document.querySelector('#in')
const outputBox = document.querySelector('#out')

const clearAll = () => {
  inputBox.value = ''
  outputBox.value = ''
}

clearBtn.addEventListener("click", () => {
  clearAll()
})

const button = document
  .querySelector("button")
  .addEventListener("click", () => {
    let letter = document.querySelector("#in").value.toLowerCase();
    let translation = document.querySelector("#out");
    translation.value = makeWord(letter);
    
  });