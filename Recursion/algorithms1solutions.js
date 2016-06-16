function rSigma(num){
  //base case: if num is zero or negative, return 0 because sigma of 0 should be zero
  if (num <= 0){
    return 0;
  }else{
  //otherwise, recurse into the same function and make progress toward base case
    return num + rSigma(num-1);
  }
}

//Fibonacci sequence is 0,1,1,2,3,5,8,13...
function rFib(num){
  if (num <= 0){
    return 0;
  }else if (num == 1){
    return 1;
  }else{
    return rFib(num-1) + rFib(num-2);
  }
}

//Tribonacci sequence is 0,0,1,1,2,4,7...
function rTrib(num){
  if (num <= 1){
    return 0;
  }else if (num == 2){
    return 1;
  }else{
    return rTrib(num-1) + rTrib(num-2) + rTrib(num-3)
  }
}

function rFact(num){
  //handling the case of a decimal thrown in.  Rounding down.
  num = Math.floor(num);
  if (num <= 1){
    return 1;
  }else{
    return num * rFact(num-1);
  }
}

function rListLength(node){
  if (!node){
    return 0;
  }else{
    return 1 + rListLength(node.next);
  }
}
    //Supplemental Node class for the rListLength
    function Node(val){
      this.val = val;
      this.next = null;
    }
    //Connecting 5 nodes
    node1 = new Node(1);
    node2 = new Node(2);
    node3 = new Node(3);
    node4 = new Node(4);
    node5 = new Node(5);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

function rBinSearch(arr, val){
  console.log(arr, val);
  var guess = arr[Math.floor(arr.length/2)];
  console.log('guess: ',guess);
  if (guess == val){
    return true;
  }else if (arr.length == 0){
    return false;
  }else{
    if (guess < val){
      console.log('guess was low');
      return rBinSearch(arr.splice(Math.floor(arr.length/2+1), Math.floor(arr.length/2)), val);
    }else{
      console.log('guess was high');
      return rBinSearch(arr.splice(0,Math.floor(arr.length/2)), val);
    }
  }
}
// console.log(rBinSearch([1,3,5,6], 4));
// console.log(rBinSearch([4,5,6,8,12], 8));

function rObjKeys(obj){
  console.log('Object: ',obj);
  var keys = [];
  for (var key in obj){
    keys.push(key);
    console.log(typeof obj[key]);
    if (typeof obj[key] == 'object'){
      keys = keys.concat(rObjKeys(obj[key]));
    }
  }
  return keys;
}
var obj1 = {
  name: 'Brandon',
  language: 'Javascript',
  address: {
    street: '1212 Main St',
    city: 'Fremont',
    state: 'OK'
  },
  age: 25
}
// console.log(rObjKeys(obj1));

//Recursive solution
function rUneven(num){
  var negative = false;
  if (num < 0){
    negative = true;
    console.log('negative');
    num = Math.abs(num);
  }
  if (num < 10){
    if (num % 2 == 1){
      return num;
    }
    return 0;
  }else{
    var digit = num % 10;
    if (digit % 2 == 1){
      return digit + rUneven(Math.floor(num / 10)) * 10;
    }
    return rUneven(Math.floor(num / 10));
  }
}
console.log(rUneven(-20390));

//Iterative solution (not optimized)
function uneven(num){
  var sum = 0;
  var count = 0;
  while (num){
    var digit = num % 10;
    console.log('digit: ', digit);
    if ( digit % 2 == 1 || digit % 2 == -1){
      console.log('found an odd digit', digit);
      sum += digit * (Math.pow(10,count));
      count++;
      console.log('count: ', count);
      console.log('sum: ', sum);
    }
    num -= digit;
    num /= 10;
    console.log('num: ', num);
  }
}
// console.log(uneven(-1845));
