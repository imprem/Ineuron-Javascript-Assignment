
class playWithString {

    // a) Convert the String into upper case.
    convertToUpperCase(str){
        return str.toUpperCase();
    }

    // b) Convert only the first character to uppercase.
    convertFirstCharctorToUppercase(str){
        let s1 = str.charAt(0).toUpperCase();
        return str.replace(str.charAt(0), s1);
    }

    // c) Convert the String into lower case.
    convertToLowerCase(str){
        return str.toLowerCase();
    }

    // d) Break the string into two halves and swap them.

    // e) Count the repeating characters.
    countRepeatingChar(str){
        obj = {};
        for(let i = 0; i < str.length; i++){
            
            if(obj[str[i]]){
				obj[str[i]] += 1;
			}else {
				obj[str[i]] = 1;
			}
        }
        return obj;
    }

    // f) Reverse the string
    reverseString(str){

        let newString = "";
        for(let i = str.length - 1; i >= 0; i--){
            newString += str.charAt(i);
        }
        return newString;
    }
}

const res = new playWithString();
console.log("a . ",res.convertToUpperCase("wowxa This"));
console.log("b . ",res.convertFirstCharctorToUppercase("tser the"));
console.log("C . ", res.convertToLowerCase("THisH"));
console.log("f. ", res.reverseString("This Om"))
console.log("e. ", res.countRepeatingChar("ashdasas"));