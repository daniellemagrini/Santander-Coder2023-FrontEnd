/*First Reverse

Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
For example: if the input string is "Hello World and Coders" then your program should return the string sredoC
dna dlroW olleH.*/

function FirstReverse(str) { 

    // code goes here 
    strSplit = str.split('');
    strReverse = strSplit.reverse();
    result = strReverse.join(''); 
    return result; 
  
  }
     
  // keep this function call here 
  console.log(FirstReverse(readline()));