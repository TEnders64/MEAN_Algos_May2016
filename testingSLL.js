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
