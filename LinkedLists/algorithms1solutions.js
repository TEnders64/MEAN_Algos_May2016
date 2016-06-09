function Node(val){
  this.val = val;
  this.next = null;
}

function SLL(){
  this.head = null;

  this.printVals = function(){
    var current = this.head;
    while (current){
      console.log(current.val);
      current = current.next;
    }
  }

  this.add = function(val){
    var node = new Node(val);
    if (!this.head){
      this.head = node;
    }else{
      var current = this.head;
      while (current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

  this.addAtIndex = function(idx, val){
    var counter = 0;
    var node = new Node(val);
    if (!this.head){ // I'm assuming I want to add this node to the list if there's no head
      this.head = node;
    }
    else if (this.head && idx == 0){ //If there's a head but they want to add at index 0, I need to move the current head
      var temp = this.head;
      this.head = node;
      node.next = temp;
    }
    else{
      var current = this.head;
      while (current.next && counter != idx - 1){
        current = current.next;
        counter++;
      }
      if (counter == idx - 1){
        node.next = current.next;
        current.next = node;
      }
      else{
        current.next = node;
      }
    }
  }

  this.sum = function(){
    var current = this.head;
    var sum = 0;
    while (current){
      sum += current.val;
      current = current.next;
    }
    return sum;
  }

  this.average = function(){
    var current = this.head;
    var sum = 0;
    var count = 1;
    while (current){
      sum += current.val
      count++;
      current = current.next;
    }
    return sum/count;
  }

  this.listToArray = function(){
    var arr = [];
    var current = this.head;
    while (current){
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  this.remove = function(val){
    if (!this.head){
      return false;
    }
    else if (this.head.val == val && !this.head.next){
      this.head = null;
    }else if (this.head.val == val && this.head.next){
      this.head = this.head.next;
    }else{
      var current = this.head;
      while (current.next){
        if (current.next.val == val){
          current.next = current.next.next;
          return; // since we don't have to remove duplicates, as soon as we leapfrog the node to be removed, we can return or exit the loop/function
        }
        current = current.next;
      }
    }
  }

  this.reverse = function(){
    if (!this.head){ return false; }
    else{
      var start = this.head;
      while (start.next){
        var temp = start.next;
        start.next = start.next.next;
        temp.next = this.head;
        this.head = temp;
      }
    }
  }

  this.hasLoop = function(){
    var runner = this.head.next;
    var walker = this.head;
    while (runner.next){
      if (runner == walker){
        return true;
      }else{
        runner = runner.next.next;
        walker = walker.next;
      }
    }
    return false;
  }
}

node1 = new Node(4);
node2 = new Node(3);
node3 = new Node(2);
node4 = new Node(1);

node1.next = node2; // 4=>3
node2.next = node3; // 4=>3=>2
node3.next = node4; // 4=>3=>2=>1

sll1 = new SLL();
sll1.head = node1;

// sll1.add(5);
// sll1.add(20);
// sll1.printVals();
// console.log(sll1.sum());
// console.log(sll1.average());
// console.log(sll1.listToArray());
// sll1.remove(1);
// sll1.addAtIndex(2, 2.5);
// sll1.reverse();
// console.log(sll1.hasLoop());
// sll1.printVals();
