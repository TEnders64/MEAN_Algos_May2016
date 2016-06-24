function btNode(value) {
  this.val = value;
  this.left = null;
  this.right = null;
}

function bst(){
  this.root = null;

  this.add = function(val){
    var node = new btNode(val);

    if (!this.root){
      this.root = node;
    }else{
      var current = this.root;
      while (current){
        if (current.val > node.val){
          if (!current.left){
            current.left = node;
            return true;
          }else{
            current = current.left;
          }
        }else{
          if (!current.right){
            current.right = node;
            return true;
          }else{
            current = current.right;
          }
        }
      }
    }
  }

  this.contains = function(val){
    var current = this.root;
    while (current && val != current.val){
      if (val < current.val){
        current = current.left;
      }else{
        current = current.right;
      }
    }
    if (!current){ return false; }
    else{ return true; }
  }

  this.min = function(){
    var current = this.root;
    while (current.left){
      current = current.left;
    }
    return current.val;
  }

  this.max = function(){
    var current = this.root;
    while (current.right){
      current = current.right;
    }
    return current.val;
  }

  this.size = function(node){
    if (!node){
      return 0;
    }else{
      return 1 + this.size(node.left) + this.size(node.right);
    }
  }

  this.isEmpty = function(){
    if (this.root){
      return true;
    }
    return false;
  }
}
