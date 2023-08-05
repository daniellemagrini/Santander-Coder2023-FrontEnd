/*Longest Word

Have the function LongestWord(sen) take the sen parameter being passed and return 
the longest word in the string. If there are two or more words that are the same length,
return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
Words may also contain numbers, for example "Hello world123 567"*/


function LongestWord(sen) { 

    // code goes here 
    wordFormat = sen.normalize("NFD").replace(/[^a-zA-Z0-9\s]/g, "");
    const words = wordFormat.split(' ');
    wordsLength = []
  
    for (i = 0; i < words.length; i++) {
      wordLength = words[i].length
      wordsLength.push(wordLength);  
    } 
    let maxValue = Math.max(...wordsLength);
    maxValueIndex = wordsLength.indexOf(maxValue);
    longestWord = words[maxValueIndex]
  
    return longestWord; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));