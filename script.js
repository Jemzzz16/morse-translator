import { makeWord, translateEnglishToMorse } from "./translator.js";


const button = document
  .querySelector("button")
  .addEventListener("click", () => {
    let letter = document.querySelector("#in").value.toLowerCase();
    let translation = document.querySelector("#out");
    translation.value = makeWord(letter);
    
  });