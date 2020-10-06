function convertToRomanNumerals(num) {
  let Numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let result = '';

  for (var i of Object.keys(Numerals)) {
    var a = Math.floor(num / Numerals[i]);
    num -= a * Numerals[i];
    result += i.repeat(q);
  }

  return result;
}
