#Recursive Sigma
Write a recursive function that given a number returns sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

#Recursive Fibonacci
Write rFib(num). Recursively compute and return the numth Fibonacci value. As in earlier challenges, treat the first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.

#Recursive Tribonacci
Write function rTrib(num) to mimic Fibonacci sequence, but add previous three values instead of previous two. Consider first three (num = 0, num = 1, num = 2) Tribonacci numbers to be 0, 0, 1. rTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4). Handle negatives and non-integers appropriately and inexpensively.

#Recursive Factorial
Given a number, return the product of integers from 1 upward to that number. If less than zero, treat as zero. If not an integer, treat as an integer. Mathematicians tell us that 0! is equal to 1, so make rFact(0) = 1. Examples: rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

#Recursive List Length
Given first node of a singly linked list, create a recursive function that returns number of nodes in that list. Assume list contains no loops and is short enough that you will not ‘blow your stack’.

#Recursive Binary Search
Given a sorted array and a value, recursively determine whether value is found within array. rBinarySearch([1,3,5,6],4) = false; rBinarySearch([4,5,6,8,12],5) = true.

#Object Keys
Given a Javascript object, return all the keys from that object in an array, whether it has embedded objects or not.  rObjKeys({name: 'Brandon', language: 'Javascript', {address: '1212 Main St', city: 'Fremont', state: 'OK'}, age: 25}) => ['name', 'language', 'address', 'city', 'state', 'age']

#Uneven Digits
Cami doesn’t know why, but she’s just in an odd mood today. Given an integer, recursively return the integer formed by stripping out all even digits in original. Solve without loops. uneven(-1845) = -15; uneven(79) = 79; uneven(20) = 0; uneven(-92) = -9.
