/*Codeland Username Validation

Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine
if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.*/


    function CodelandUsernameValidation(str) { 

        // code goes here  
        letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        specialCharacter = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", "=", "+", "{", "}", "[", "]", "|","/"];
        strLength = str.length;
        strUpper = str.toUpperCase();
        const firstCharacter = strUpper.charAt(0);
        const lastCharacter = str.substr(-1);
      
      
        if (strLength >=4 && strLength <=25) {
          if (letters.includes(firstCharacter)) {
            if (!strUpper.includes(specialCharacter)) {
              if (lastCharacter !== "_") {
                return true;
              }
              else {
                //return false
                console.log("The username cannot end with an underscore character")
              }
            }
            else {
              //return false
              console.log("The username can only contain letters, numbers, and the underscore character")
            }
          }
          else {
            //return false
            console.log("The username must start with a letter")
          }
        }
        else {
          //return false
          console.log("The username must be between 4 and 25 characters")
        }
        return true; 
      }
         
      // keep this function call here 
      console.log(CodelandUsernameValidation(readline()));