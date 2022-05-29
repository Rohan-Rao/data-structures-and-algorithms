/**
 * Check Permutation: Given two strings write a method to determine if one is the permutation of another.
 */

function countCharacters(str) {
  const charCountMap = new Map();

  for (const char of str) {
    console.log(char);
    let count = charCountMap.get(char) || 0;
    charCountMap.set(char, count + 1);
  }
  console.log(charCountMap);
  return charCountMap;
}

function checkCharacterCount(charCountMap1, charCountMap2) {
  let isPermutation = true;
  charCountMap1.forEach((count1, char) => {
    const count2 = charCountMap2.get(char);
    console.log(char, "-> ", count1, " ", count2);
    if (count1 !== count2) {
      isPermutation = false;
    }
  });

  return isPermutation;
}

function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const charCountStr1 = countCharacters(str1);
  const charCountStr2 = countCharacters(str2);

  return checkCharacterCount(charCountStr1, charCountStr2);
}

function main() {
  const str1 = "abcd";
  const str2 = "bcad";

  const isPermutation = checkPermutation(str1, str2);

  if (isPermutation) {
    console.log("strings ARE permutations of one another");
  } else {
    console.log("string ARE NOT permutations of one another");
  }
}

main();
