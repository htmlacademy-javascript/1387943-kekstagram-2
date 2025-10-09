const checkLengthString = (string, maxLength) => string.length <= maxLength;

const checkPalindrome = (string) => {
  const normalString = string.replaceAll(' ','').toLowerCase();
  let reverseString = '';
  for (let i = normalString.length - 1; i >= 0 ; i--) {
    reverseString += normalString[i];
  }
  return normalString === reverseString;
};


const extractNumbers = (string) => {
  const normalString = string.toString().replaceAll(' ','');
  let stringNumbers = '';
  for (let i = 0; i < normalString.length ; i++) {
    if (normalString[i] >= 0 && normalString[i] <= 9) {
      stringNumbers += normalString[i];
    }
  }
  return parseInt(stringNumbers, 10);
};

checkLengthString ('дом мод',5);
checkPalindrome ('дом мод');
extractNumbers ('2 счастливых гуся и 11 гусынь');
