#Strings

#####Notes on Strings...
  Strings are immutable.  Meaning, they cannot be changed in place like you would an array.
  For these algorithms, you will be creating new strings and returning them, unless asked for true/false or an array, of course.

##returnWords [Basic]
Create a function called returnWords that takes in a string and returns and array of the string's individual words.
E.g. returnWords("I like pizza!") => ["I", "like", "pizza!"]  Only concern yourself with spaces.  
Don't worry about linereturns or tabs.  Treat punctuation as part of the word.
function returnWords (phrase){
	var arr = []
	var word = ""
	for (var i = 0; i < phrase.length; i++){
		//This line triggers when a space is found (AKA when a word ends)
		if(phrase[i] == " ") {
			//Make sure there wasn't a leading white space or multiple spaces
			if(word.length > 0){
				arr.push(word);
				word = "";
			}
		//Otherwise push the current letter we are looking at to the word string
		} else {
			word += phrase[i];
		}
	}
	//At the end of for loop if there is anything left in the word add it to the arr of words
	if (word.length > 0) {
		arr.push(word);
	}
	return arr;
}


##rotateString [Intermediate]
Create a function called rotateString that takes in a string and a number and rotates the string by that many characters to the right.
E.g. rotateString("Seattle Mariners", 3) => "ersSeattle Marin"

function rotateString(str, num){
  //Outsmart the user and determine the minimum actual rotations you need to make.
  rotates = num % str.length;
  var newStr = "";
  //Start building the new string from the point of the length minus the rotations until the end of the string
  for (var i = str.length - rotates; i < str.length; i++){
    newStr += str[i];
  }
  // console.log(newStr);
  // Finish building the new string from 0 to the previous length minus the rotations
  for (var j = 0; j < str.length - rotates; j++){
    newStr += str[j];
  }
  return newStr;
}

##isRotation [Intermediate]
Create a function called isRotation that takes in two strings and returns true if the second string is a rotation of the first string.  Return false otherwise.  Capitalization applies.
E.g. isRotation("Todd", "oddT") => true, isRotation("Todd", "oddt") => false

function isRotation(str1, str2){
  //Use our rotateString method to rotate str2 and compare it against str1 for as many times as there are characters in str1
  //How could you make a quicker check of false?  What if str1 and str2 are different lengths?
  for (var i = 0; i < str1.length; i++){
    if (str1 == rotateString(str2, i)){
      return true;
    }
  }
  return false;
}
