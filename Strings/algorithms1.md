#Strings

#####Notes on Strings...
  Strings are immutable.  Meaning, they cannot be changed in place like you would an array.
  For these algorithms, you will be creating new strings and returning them, unless asked for true/false, of course.

##returnWords [Basic]
Create a function called returnWords that takes in a string and returns and array of the string's individual words.
E.g. returnWords("I like pizza!") => ["I", "like", "pizza!"]  Only concern yourself with spaces.  
Don't worry about linereturns or tabs.  Treat punctuation as part of the word.

##rotateString [Intermediate]
Create a function called rotateString that takes in a string and a number and rotates the string by that many characters to the right.
E.g. rotateString("Seattle Mariners", 3) => "ersSeattle Marin"

##isRotation [Intermediate]
Create a function called isRotation that takes in two strings and returns true if the second string is a rotation of the first string.  Return false otherwise.  Capitalization applies.
E.g. isRotation("Todd", "oddT") => true, isRotation("Todd", "oddt") => false
