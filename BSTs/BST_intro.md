#Binary Search Trees
This chapter we explore trees, and in particular binary search tree (BST), an important data structure. The BST is optimized for quickly finding/retrieving elements. A BST is similar to a linked list, in that it stores data elements within node objects. Let’s compare a doubly linked list node to a binary tree node.
```javascript
function dlNode(value) {
  this.val = value;
  this.prev = null;
  this.next = null;
}

function bstNode(value) {
  this.val = value;
  this.left = null;
  this.right = null;
}
```
In a doubly linked list, each node has a value, plus pointers to two peers (prev and next). Similarly, in a binary tree each node has a value, plus pointers to two children, left and right. Just as with linked lists, these pointer attributes often reference another node, but can be null. Linked lists and binary trees always start with a single node; in a linked list we call it the head, in a binary tree we call it the root. The BST structures the data in a tree rather than a flat linear sequence.

A binary tree node can have a left child and/or a right child; each child might have left and/or right children of its own. An entire section of a family might descend from one sibling as opposed to another, similarly there are related subsets of a binary tree. These are (no surprise) called subtrees. We refer to all nodes stemming from the root node’s left pointer as the root’s left subtree, for example. By their basic definition, neither generic binary trees nor generic linked lists impose any specific order on where values must be located in them. There is a type of binary tree that adds structure, though. Read on.

The binary search tree adds a requirement that for every node, all nodes in its left subtree must have smaller values. Similarly, its right subtree must contain only values that are greater than or equal to its value. This constraint holds for every node in the subtree, not just the direct children. These rules determine exactly where new children are placed in a BST. If “Grandparent” node<50> has a right child with the value 75, then children of node<75> are appropriately constrained not only by their parent, but by that grandparent as well. Specifically, the entire left subtree of node<75> must have values between 50 and 75.  Below is an example.
![alt_text](bst.png "BST")

BST nodes without children are considered leaf nodes. Depending on its values, no node is required to have two children. Even in a tree containing many values, the root node might have a left or right pointer that is null (e.g. if the root contains the smallest or largest value in the tree, respectively).

The Binary Search Tree is an example of an Ordered data structure, because the values are stored in a way that allows us easily to get from one value to the next-largest value or next-smallest value.

##Let’s build a basic Binary Search Tree. These challenges start with the following reference definitions:

```javascript
function btNode(value) {
  this.val = value;
  this.left = null;
  this.right = null;
}

function bst(){
  this.root = null;
}
```
###Add
Create an add(val) method on the bst object to add a new value to the tree. This entails creating a btNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.

###Contains
Create a contains(val) bst method that returns whether the tree contains a given value. Take advantage of the BST’s structure to make this a much more rapid operation than a singly linked list's would be.

###Min
Create a min() method on the bst class that returns the smallest value found in the BST.

###Max
Create a max() bst method that returns the BST’s largest value.

###Size
Write a size() method that returns the number of nodes (values) contained in the tree.

###Is Empty
Create an isEmpty() method to return whether BST is empty (empty BSTs contains no values).
