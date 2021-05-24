export const translateEnglishToMorse = (letter) => {
  if (letter === 'a') {
    return '.-';
  }else if (letter === 'b') {
    return '-...';
  }else if (letter === 'c') {
    return '-.-.';
  }else if (letter === 'd') {
    return '-..';
  }else if (letter === 'e') {
    return '.';
  } else {
    return 'unavailable';
  }
};