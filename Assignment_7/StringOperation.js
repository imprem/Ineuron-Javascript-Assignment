
class StringOperation{

  // 1 Input a String S, and check its length and if the length is greater than 4,
    truncateInputString(str){
         if(str.length > 4){
           return str.substring(0, 4);
         }else{
          return str;
         }
    }
 
    // 2 Input a String S with multiple words, and remove whitespaces
    removeWhitespaces(str){
      let s1 = "";
      for(let i = 0; i < str.length; i++){
        if(str.charAt(i) != ' '){
          s1 += str.charAt(i);
        }
      }
      return s1;
    }

    // 3 Input a String S with two words, and replace first word with second word
    replaceFirstWordWithSecondWord(str){
      let arr = str.split(' ');
      return arr[1] +" "+ arr[0];
    }

    // 4 Input a String S with a word, and replace character “a” with “x”
    replaceCharacter(word){
      return word.replaceAll('a', 'x');
    }

    // 5. What string method can be used to convert string into array
    convertStringArray(str){
      return [...str];
    }
}

const res = new StringOperation();
console.log(res.truncateInputString("premchand"));
console.log(res.removeWhitespaces("Prem cha"));
console.log(res.replaceFirstWordWithSecondWord("Hi Boy"));
console.log(res.replaceCharacter("applea"));
console.log(res.convertStringArray("123a"));