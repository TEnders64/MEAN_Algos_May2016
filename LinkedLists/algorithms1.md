#Linked Lists (Singly)

####The prerequisites for linked lists are as follows:
- A linked list is a list of nodes.  We must first understand nodes a bit.  Individual nodes "point" to  another node with a variable, or reference, we'll call 'next'.  The Node class is below...
```javascript
function Node(val){
  this.val = val;
  this.next = null;
}
```
- The Node class takes in a value and then has a 'next' pointer.  This 'next' pointer may point to another Node instance.  HOWEVER, this is not a copy of the entire node it is pointing to.  Instead, it is a reference, aka address in memory space.  Consider every node's 'next' to be an address holder and NOT a replicated object.
- Consider this...

I'm going to create 2 nodes.

```javascript
var node1 = new Node(5);
var node2 = new Node(10);

console.log(node1.next); //null
node1.next = node2; // this does not save a copy of node2 inside node1's 'next' property.  It just knows where to find node2 now!

console.log(node1.next); // Node { val: 10, next: null }   ... it knows where to find node2's info in memory space!
```
##We're going to build out methods in a Singly Linked List class.

####Here's the set up for an SLL
- Singly Linked Lists simply have one property, a 'head' pointer.  All a singly liked list needs to know is which node is the first node, hence why we call it the 'head' pointer.  

The class for an SLL is below.

```javascript
function SinglyLinkedList(){
  this.head = null;
}
```

- Very simple setup, but we'll be focusing on building METHODS within the class so we can traverse a list and perform calculations along the way.

- Here's a simple example of a traverse method.

```javascript
function SinglyLinkedList(){
  this.head = null;

  this.traverse = function(){
    var current = this.head;
    while (current){
      current = current.next;
    }
  }
}
```
Here's how the traverse method works...
- We set a variable called current to be equal to the head of the SLL.  Even if we haven't set our head to anything, i.e. it is still null, the code will still work.  In that case, current would be null and our while loop never gets entered and technically we've traversed an empty SLL.  
- What if we set this.head equal to a new node?  In that case, var current is the same as this.head which is the same as the pointer to the first node in the list.  The while loop evaluates to true because current would be equal to something other than null, false, or zero.
- Once inside the while loop, it resets current to be equal to current's next property (whatever node current happens to be at that time).  As long as there is another node with a 'next' pointer pointing to another node, this while loop will run, run, run.  

Now every instance of SinglyLinkedList has a traverse method.

Here's our previous example of nodes and our SLL class.

```javascript
function Node(val){
  this.val = val;
  this.next = null;
}

function SinglyLinkedList(){
  this.head = null;

  this.traverse = function(){
    var current = this.head;
    while (current){
      current = current.next;
    }
  }
}

var node1 = new Node(5);
var node2 = new Node(10);

node1.next = node2;

var sll1 = new SinglyLinkedList();
sll1.head = node1;
```

sll1's head is pointing to node1.  So if we performed a traverse, our while loop would run twice.  To prove it, here's the traverse method with some console logs...  Run this code to see what you get.

```javascript
function Node(val){
  this.val = val;
  this.next = null;
}

function SinglyLinkedList(){
  this.head = null;

  this.traverse = function(){
    var current = this.head;
    while (current){
      console.log('i have a node');
      current = current.next;
    }
  }
}

var node1 = new Node(5);
var node2 = new Node(10);

node1.next = node2;

var sll1 = new SinglyLinkedList();
sll1.head = node1;

sll1.traverse();
```

For all the challenges for SLL's, include both the Node and SinglyLinkedList classes in the same file like we did up above.  You'll be building out your own methods within the SinglyLinkedList class.  Okay, time to put this knowledge to the test.

##Adding Nodes
Create an add method in the SinglyLinkedList class that adds a node to the end of the list.  All you are given is a value.  Do not worry about sorting, just add to the end of the list.

###Bonus: addAtIndex
Create an addAtIndex method that adds a node at the index given.  You are also given a value.  For example, given this list:
(5) -> (10) -> (12)
addAtIndex(1, 20) will produce
(5) -> (20) -> (10) -> (12)

##Sum
Create a sum method that returns the sum of the values in the list.

##Average
Create an average method that returns the average of the values in the list.

##ListToArray
Create a listToArray method that returns all the values of the list in an array.

##Removing Nodes (Advanced)
Create a remove method that takes in a value.  If that value is found in the list, remove its node (do not worry about removing duplicates, just remove the first one you find).  Hmm, how would you remove a node from a list if all a list truly is, is a bunch of nodes pointing to one another?
