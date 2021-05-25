import { translateEnglishToMorse } from './translator.js';

it ('Should translate a to .-', () => {
  const result = translateEnglishToMorse("a");
  expect(result).toBe(".-")
})
it ('Should translate b to -...', () => {
  const result = translateEnglishToMorse("b");
  expect(result).toBe("-...")
})
it ('Should translate c to -.-.', () => {
  const result = translateEnglishToMorse("c");
  expect(result).toBe("-.-.")
})
it ('Should translate d to -..', () => {
  const result = translateEnglishToMorse("d");
  expect(result).toBe("-..")
})
it ('Should translate e to .', () => {
  const result = translateEnglishToMorse("e");
  expect(result).toBe(".")
})

////// MUST BE A SIMPLE WAY! 