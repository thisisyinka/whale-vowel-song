const submitBtn = document.querySelector('.show');
const showSong = document.querySelector('.preview');
const resetBtn = document.querySelector('.reset');
const errorBtn = document.querySelector('.error');

const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

//loop to iterate through each input and vowel
const computeWords = (input) => {
  for (const char of input) {
    if (char === 'e') {
      resultArray.push(char);
    } else if (char === 'u') {
      resultArray.push(char);
    }
    for (const vowel of vowels) {
      if (char === vowel) {
        resultArray.push(vowel);
      }
    }
  }
  errorBtn.textContent = '';
  const resultString = resultArray.join(' ').toUpperCase();
  showSong.textContent = resultString;
};

submitBtn.addEventListener('click', function () {
  let input = document.getElementById('words').value;

  input === ''
    ? (errorBtn.textContent = 'Please input some words!')
    : computeWords(input);
});

resetBtn.addEventListener('click', function () {
  showSong.textContent = '';
  location.reload();
});
